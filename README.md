# 汤仔App - 飞书表单集成平台

## 📋 项目概述
这是一个基于 Next.js 14 的 Web 应用，用户可以通过不同的按钮访问不同的飞书表单，支持用户注册登录，并将相关信息存储在 Supabase 数据库中。

## 🎯 核心功能需求
1. **用户认证系统**
   - 用户注册和登录
   - 用户信息管理
   - 登录状态保持

2. **表单导航功能**
   - 多个按钮对应不同的飞书表单
   - 点击按钮跳转到新页面
   - 支持的表单类型：
     - 订单信息表单：`https://fpliu7h1h8.feishu.cn/share/base/form/shrcnMJI7jfSdVInaNBHiwW8ZFb`
     - 消费记录表单：`https://fpliu7h1h8.feishu.cn/share/base/form/shrcnWP41xwRZrnaJdkb4gkLUKb`

3. **数据管理**
   - 用户注册登录信息存储
   - 表单链接信息管理
   - 用户行为日志记录

## 🛠️ 技术栈
- **前端框架**: Next.js 14 (App Router)
- **数据库**: Supabase
- **部署平台**: Vercel
- **样式**: Tailwind CSS
- **认证**: Supabase Auth
- **语言**: TypeScript

## 📊 数据库设计规划
### 用户表 (users)
- id (UUID, 主键)
- email (varchar, 唯一)
- username (varchar)
- created_at (timestamp)
- updated_at (timestamp)

### 表单链接表 (form_links)
- id (UUID, 主键)
- name (varchar) - 表单名称
- url (varchar) - 飞书表单链接
- description (text) - 表单描述
- is_active (boolean) - 是否启用
- created_at (timestamp)

### 用户访问日志表 (access_logs)
- id (UUID, 主键)
- user_id (UUID, 外键)
- form_link_id (UUID, 外键)
- accessed_at (timestamp)

## 🚀 项目结构规划
```
汤仔App-0702/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── form/
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── AuthForm.tsx
│   ├── FormButton.tsx
│   └── Header.tsx
├── lib/
│   ├── supabase.ts
│   └── types.ts
└── public/
```

## 📝 开发计划
1. **阶段一**: 项目初始化和基础配置
2. **阶段二**: 用户认证系统实现
3. **阶段三**: 表单导航功能开发
4. **阶段四**: 数据库集成和API开发
5. **阶段五**: 部署和测试

---
*项目创建日期: 2024年*
*开发者: AI助手 + 用户*