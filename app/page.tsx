import Link from 'next/link'
import { FileText, ShoppingCart, TrendingUp } from 'lucide-react'

export default function Home() {
  // 表单配置数据
  const formLinks = [
    {
      id: 'order-form',
      name: '订单信息表单',
      description: '填写您的订单相关信息',
      url: 'https://fpliu7h1h8.feishu.cn/share/base/form/shrcnMJI7jfSdVInaNBHiwW8ZFb',
      icon: ShoppingCart,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'consumption-form', 
      name: '消费记录表单',
      description: '记录您的消费支出信息',
      url: 'https://fpliu7h1h8.feishu.cn/share/base/form/shrcnWP41xwRZrnaJdkb4gkLUKb',
      icon: TrendingUp,
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 页面头部 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">汤仔App</h1>
            </div>
            <p className="text-gray-600">飞书表单集成平台</p>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            选择您要填写的表单
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            点击下方按钮，在新页面中打开对应的飞书表单，简单便捷地完成信息填写
          </p>
        </div>

        {/* 表单按钮网格 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {formLinks.map((form) => {
            const IconComponent = form.icon
            return (
              <Link
                key={form.id}
                href={`/form/${form.id}`}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                {/* 背景装饰 */}
                <div className={`absolute inset-0 ${form.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* 图标 */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${form.color} text-white mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* 标题和描述 */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {form.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {form.description}
                </p>

                {/* 箭头指示器 */}
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>立即填写</span>
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>

        {/* 功能说明区域 */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            如何使用
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">选择表单</h4>
              <p className="text-gray-600">点击对应的表单按钮</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">填写信息</h4>
              <p className="text-gray-600">在新页面中完成表单填写</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">提交完成</h4>
              <p className="text-gray-600">点击提交按钮完成表单</p>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 汤仔App. 让表单填写更简单便捷.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}