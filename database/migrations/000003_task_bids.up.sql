CREATE TABLE task_bids (
    bid_id BIGSERIAL PRIMARY KEY,                -- 主键
    task_id BIGINT NOT NULL,                     -- 外键：任务
    user_id BIGINT NOT NULL,                     -- 外键：用户
    bid_time TIMESTAMPTZ NOT NULL DEFAULT NOW(), -- 竞抢时间
    finished BOOLEAN DEFAULT FALSE; -- 是否完成了任务，未完成任务的，最终统计时扣1个分值
    proposal TEXT;    -- 用户完成的任务的描述，包括代码commitID，文档链接，bugID等
    is_winner BOOLEAN DEFAULT FALSE;  -- 完成任务后是否为最终方案中标人，每个任务只能有一个中标人，只有中标人可以获取任务的分值
    UNIQUE (task_id, user_id),                   -- 防止同一用户重复竞抢

    -- 外键约束
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 表注释
COMMENT ON TABLE task_bids IS '记录用户对任务发起竞抢行为的事务表';

-- 列注释
COMMENT ON COLUMN task_bids.bid_id IS '竞抢记录ID（主键）';
COMMENT ON COLUMN task_bids.task_id IS '任务ID（引用 tasks.task_id）';
COMMENT ON COLUMN task_bids.user_id IS '用户ID（引用 users.user_id）';
COMMENT ON COLUMN task_bids.bid_time IS '用户发起竞抢的时间戳';
COMMENT ON COLUMN task_bids.task_id IS '被竞抢的任务ID';
COMMENT ON COLUMN task_bids.user_id IS '发起竞抢的用户ID';

