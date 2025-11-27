-- 创建 ENUM 类型
CREATE TYPE task_status AS ENUM (
    'unpublished',     -- 未发布
    'bidding',         -- 竞抢中
    'bidding_closed',  -- 竞抢结束
    'assigned'         -- 指派型（无需竞抢）
);

-- 创建任务表
CREATE TABLE tasks (
    task_id BIGINT PRIMARY, 
    task_name VARCHAR(255) NOT NULL,
    task_owner BIGINT NOT NULL,
    estimated_effort INTEGER NOT NULL,
    points INTEGER,
    bidder_limit INTEGER DEFAULT 2,
    status task_status NOT NULL DEFAULT 'unpublished'
);

--------------------------------------------------------------------------------------------
-- 添加表级注释
COMMENT ON TABLE tasks IS '任务信息表，存储系统任务的基本配置和限制信息';

-- 为任务表字段添加注释
COMMENT ON COLUMN tasks.task_id IS '任务ID';
COMMENT ON COLUMN tasks.task_name IS '任务名称，必填字段，描述任务内容';
COMMENT ON COLUMN tasks.task_owner IS '任务负责人标识，必填字段，通常关联用户标识';
COMMENT ON COLUMN tasks.estimated_effort IS '预估工作量数值，可用于工作量估算和排期';
COMMENT ON COLUMN tasks.points IS '任务点数，可用于价值量化、优先级排序或积分计算';
COMMENT ON COLUMN tasks.bidder_limit IS '投标人数量上限，默认2人，用于控制任务参与并发度';
COMMENT ON COLUMN tasks.status IS '任务状态：unpublished=未发布，bidding=竞抢中，bidding_closed=竞抢结束，assigned=指派型';
