-- 删除触发器
DROP TRIGGER IF EXISTS trigger_update_users_timestamps ON users;

-- 删除触发器函数
DROP FUNCTION IF EXISTS update_user_timestamps();

-- 删除索引
DROP INDEX IF EXISTS idx_users_is_deleted;
DROP INDEX IF EXISTS idx_users_domain_name_active;

-- 删除表级和列级注释
COMMENT ON TABLE users IS NULL;

COMMENT ON COLUMN users.user_id IS NULL;
COMMENT ON COLUMN users.domain_name IS NULL;
COMMENT ON COLUMN users.english_name IS NULL;
COMMENT ON COLUMN users.chinese_name IS NULL;
COMMENT ON COLUMN users.is_deleted IS NULL;
COMMENT ON COLUMN users.created_at IS NULL;
COMMENT ON COLUMN users.updated_at IS NULL;
COMMENT ON COLUMN users.deleted_at IS NULL;

-- 删除索引注释
COMMENT ON INDEX idx_users_is_deleted IS NULL;
COMMENT ON INDEX idx_users_domain_name_active IS NULL;

-- 删除函数和触发器注释
COMMENT ON FUNCTION update_user_timestamps() IS NULL;
COMMENT ON TRIGGER trigger_update_users_timestamps ON users IS NULL;

-- 删除表
DROP TABLE IF EXISTS users;
