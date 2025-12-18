import React, { useState } from 'react';
import { Table, Button, Tag, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const TaskSquare = () => {
  const [tasks, setTasks] = useState([
    {
      taskId: 'TASK001',
      taskName: '前端页面开发',
      estimatedHours: 8,
      points: 100,
      maxParticipants: 3,
      status: 'open',
      assignee: '-'
    },
    {
      taskId: 'TASK002',
      taskName: '后端API接口设计',
      estimatedHours: 12,
      points: 150,
      maxParticipants: 2,
      status: 'open',
      assignee: '-'
    },
    {
      taskId: 'TASK003',
      taskName: '数据库优化',
      estimatedHours: 6,
      points: 80,
      maxParticipants: 1,
      status: 'claimed',
      assignee: '张三'
    },
    {
      taskId: 'TASK004',
      taskName: 'UI设计优化',
      estimatedHours: 4,
      points: 60,
      maxParticipants: 2,
      status: 'open',
      assignee: '-'
    },
    {
      taskId: 'TASK005',
      taskName: '测试用例编写',
      estimatedHours: 5,
      points: 70,
      maxParticipants: 3,
      status: 'in_progress',
      assignee: '李四'
    }
  ]);

  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const handleClaim = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.taskId === taskId
          ? { ...task, status: 'claimed', assignee: '当前用户' }
          : task
      )
    );
  };

  const handlePublish = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.taskId === taskId
          ? { ...task, status: 'open', assignee: '-' }
          : task
      )
    );
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`搜索${dataIndex === 'taskId' ? '任务ID' : 
                            dataIndex === 'taskName' ? '任务名称' :
                            dataIndex === 'assignee' ? '执行者' : dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            搜索
          </Button>
          <Button
            onClick={() => {
              clearFilters();
              confirm();
            }}
            size="small"
            style={{ width: 90 }}
          >
            重置
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
  });

  const getStatusTag = (status) => {
    const statusMap = {
      'open': { color: 'green', text: '开放' },
      'claimed': { color: 'blue', text: '已认领' },
      'in_progress': { color: 'orange', text: '进行中' },
      'completed': { color: 'gray', text: '已完成' }
    };
    const config = statusMap[status] || { color: 'default', text: status };
    return <Tag color={config.color}>{config.text}</Tag>;
  };

  const columns = [
    {
      title: '任务ID',
      dataIndex: 'taskId',
      key: 'taskId',
      sorter: (a, b) => a.taskId.localeCompare(b.taskId),
      sortOrder: sortedInfo.columnKey === 'taskId' ? sortedInfo.order : null,
      ...getColumnSearchProps('taskId'),
    },
    {
      title: '任务名称',
      dataIndex: 'taskName',
      key: 'taskName',
      sorter: (a, b) => a.taskName.localeCompare(b.taskName),
      sortOrder: sortedInfo.columnKey === 'taskName' ? sortedInfo.order : null,
      ...getColumnSearchProps('taskName'),
    },
    {
      title: '预估工时',
      dataIndex: 'estimatedHours',
      key: 'estimatedHours',
      sorter: (a, b) => a.estimatedHours - b.estimatedHours,
      sortOrder: sortedInfo.columnKey === 'estimatedHours' ? sortedInfo.order : null,
      render: (hours) => `${hours}小时`
    },
    {
      title: '分值',
      dataIndex: 'points',
      key: 'points',
      sorter: (a, b) => a.points - b.points,
      sortOrder: sortedInfo.columnKey === 'points' ? sortedInfo.order : null,
      render: (points) => `${points}分`
    },
    {
      title: '人数上限',
      dataIndex: 'maxParticipants',
      key: 'maxParticipants',
      sorter: (a, b) => a.maxParticipants - b.maxParticipants,
      sortOrder: sortedInfo.columnKey === 'maxParticipants' ? sortedInfo.order : null,
      render: (max) => `${max}人`
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      sortOrder: sortedInfo.columnKey === 'status' ? sortedInfo.order : null,
      render: (status) => getStatusTag(status)
    },
    {
      title: '执行者',
      dataIndex: 'assignee',
      key: 'assignee',
      sorter: (a, b) => a.assignee.localeCompare(b.assignee),
      sortOrder: sortedInfo.columnKey === 'assignee' ? sortedInfo.order : null,
      ...getColumnSearchProps('assignee'),
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.status === 'open' && (
            <Button
              type="primary"
              size="small"
              onClick={() => handleClaim(record.taskId)}
            >
              Claim
            </Button>
          )}
          {record.status !== 'open' && (
            <Button
              type="default"
              size="small"
              onClick={() => handlePublish(record.taskId)}
            >
              Publish
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '16px' }} />

      <Table
        columns={columns}
        dataSource={tasks}
        rowKey="taskId"
        onChange={handleChange}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `共 ${total} 条记录`,
        }}
        style={{
          backgroundColor: 'transparent',
        }}
        className="task-table"
      />

      <style jsx>{`
        .task-table .ant-table {
          background-color: transparent !important;
        }
        
        .task-table .ant-table-container {
          background-color: transparent !important;
        }
        
        .task-table .ant-table-body {
          background-color: transparent !important;
        }
        
        .task-table .ant-table-thead > tr > th {
          background-color: #f5f5f5;
          font-weight: 600;
        }
        
        /* Light mode table styles */
        body[data-theme="light"] .task-table .ant-table-tbody > tr {
          background-color: #ffffff !important;
        }
        
        body[data-theme="light"] .task-table .ant-table-tbody > tr:nth-child(even) {
          background-color: #fafafa !important;
        }
        
        body[data-theme="light"] .task-table .ant-table-tbody > tr:hover {
          background-color: #e6f7ff !important;
        }
        
        /* Dark mode table styles */
        body[data-theme="dark"] .task-table .ant-table-thead > tr > th {
          background-color: #1f1f1f !important;
          color: rgba(255, 255, 255, 0.88) !important;
        }
        
        body[data-theme="dark"] .task-table .ant-table-tbody > tr {
          background-color: #141414 !important;
          color: rgba(255, 255, 255, 0.88) !important;
        }
        
        body[data-theme="dark"] .task-table .ant-table-tbody > tr:nth-child(even) {
          background-color: #1a1a1a !important;
          color: rgba(255, 255, 255, 0.88) !important;
        }
        
        body[data-theme="dark"] .task-table .ant-table-tbody > tr:hover {
          background-color: #262626 !important;
        }
      `}</style>
    </div>
  );
};

export default TaskSquare;
