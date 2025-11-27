CREATE TABLE users (
    user_id BIGINT PRIMARY KEY CHECK (user_id BETWEEN 1 AND 4294967295),
    domain_name VARCHAR(255) NOT NULL UNIQUE,
    english_name VARCHAR(100),
    chinese_name VARCHAR(50),
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deleted_at TIMESTAMPTZ
);

-- 为软删除字段创建索引
CREATE INDEX idx_users_is_deleted 
    ON users(is_deleted);

CREATE INDEX idx_users_domain_name_active 
    ON users(domain_name) 
    WHERE is_deleted = FALSE;

-- 更新触发器（包含软删除逻辑）
CREATE OR REPLACE FUNCTION update_user_timestamps()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    
    -- 如果是软删除操作，设置 deleted_at
    IF NEW.is_deleted = TRUE AND OLD.is_deleted = FALSE THEN
        NEW.deleted_at = NOW();
    END IF;

    -- 如果是恢复操作，清空 deleted_at
    IF NEW.is_deleted = FALSE AND OLD.is_deleted = TRUE THEN
        NEW.deleted_at = NULL;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_users_timestamps
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_user_timestamps();


---------------------------------------------------------------------------
-- 添加表级注释
COMMENT ON TABLE users IS '用户信息表，存储系统用户的基本信息和状态管理';

-- 为用户表字段添加注释
COMMENT ON COLUMN users.user_id IS '用户ID（32位正整数主键，范围1-4294967295）';
COMMENT ON COLUMN users.domain_name IS '用户域名标识，唯一约束，用于系统登录和用户识别';
COMMENT ON COLUMN users.english_name IS '用户英文名称，可选字段';
COMMENT ON COLUMN users.chinese_name IS '用户中文名称，可选字段';
COMMENT ON COLUMN users.is_deleted IS '软删除标记：true表示已删除，false表示正常状态（默认false）';
COMMENT ON COLUMN users.created_at IS '记录创建时间，插入时自动设置为当前服务器时间';
COMMENT ON COLUMN users.updated_at IS '最后更新时间，通过触发器在每次更新时自动刷新';
COMMENT ON COLUMN users.deleted_at IS '软删除时间戳，当用户被软删除时自动记录删除时间';

-- 为索引添加注释
COMMENT ON INDEX idx_users_is_deleted IS '基于is_deleted字段的索引，优化按删除状态筛选的查询性能';
COMMENT ON INDEX idx_users_domain_name_active IS '部分索引，仅对未删除用户的domain_name建立索引，优化活跃用户查询';

-- 为函数和触发器添加注释
COMMENT ON FUNCTION update_user_timestamps() IS '用户表时间戳自动更新函数，负责维护updated_at和deleted_at字段的自动更新逻辑';
COMMENT ON TRIGGER trigger_update_users_timestamps ON users IS '用户表BEFORE UPDATE触发器，在每次更新前调用时间戳更新函数';
