-- 删除列注释
COMMENT ON COLUMN task_bids.bid_id IS NULL;
COMMENT ON COLUMN task_bids.task_id IS NULL;
COMMENT ON COLUMN task_bids.user_id IS NULL;
COMMENT ON COLUMN task_bids.bid_time IS NULL;
COMMENT ON COLUMN task_bids.finished IS NULL;
COMMENT ON COLUMN task_bids.proposal IS NULL;
COMMENT ON COLUMN task_bids.is_winner IS NULL;

-- 删除表注释
COMMENT ON TABLE task_bids IS NULL;

-- 删除表
DROP TABLE IF EXISTS task_bids;

