
# 创建迁移文件
# migrate create -ext sql -dir migrations -seq init

# 编写 SQL

# 迁移
# migrate -path migrations -database "postgres://user:pass@localhost:5432/dbname?sslmode=disable" up

# 回滚
# migrate -path migrations -database "postgres://user:pass@localhost:5432/dbname?sslmode=disable" down 1

# 查看版本
# migrate -path migrations -database "..." version


