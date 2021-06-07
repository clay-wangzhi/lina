import i18n from '@/i18n/i18n'

export default [
  {
    path: 'ticket',
    name: 'PublishTicketList',
    component: () => import('@/views/publish/ticket/PublishTicketList'),
    meta: { title: i18n.t('route.PublishTicketList') }
  },
  {
    path: 'jenkins',
    name: 'PublishJenkinsList',
    component: () => import('@/views/publish/jenkins/PublishJenkinsList'),
    meta: { title: i18n.t('route.PublishJenkinsList') }
  },
  {
    path: 'jenkins/create',
    name: 'PublishJenkinsCreate',
    component: () => import('@/views/publish/jenkins/PublishJenkinsCreateUpdate'),
    meta: { title: i18n.t('route.PublishJenkinsCreate'), activeMenu: '/publish/jenkins', action: 'create' },
    hidden: true
  },
  {
    path: 'history',
    name: 'PublishHistory',
    component: () => import('@/views/publish/PublishHistoryList'),
    meta: { title: i18n.t('route.PublishHistoryList') }
  }
]
