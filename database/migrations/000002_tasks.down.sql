-- 删除任务表字段注释
COMMENT ON COLUMN tasks.task_id IS NULL;
COMMENT ON COLUMN tasks.task_name IS NULL;
COMMENT ON COLUMN tasks.task_owner IS NULL;
COMMENT ON COLUMN tasks.estimated_effort IS NULL;
COMMENT ON COLUMN tasks.points IS NULL;
COMMENT ON COLUMN tasks.bidder_limit IS NULL;
COMMENT ON COLUMN tasks.status IS NULL;

-- 删除表注释
COMMENT ON TABLE tasks IS NULL;

-- 删除任务表
DROP TABLE IF EXISTS tasks;

-- 删除 ENUM 类型
DROP TYPE IF EXISTS task_status;

