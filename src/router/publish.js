import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'

export default [
  {
    path: 'ticket',
    name: 'PublishTicketList',
    component: () => import('@/views/publish/ticket/PublishTicketList'),
    meta: { title: i18n.t('route.PublishTicketList') }
  },
  {
    path: 'jenkins',
    component: empty,
    redirect: '',
    meta: { },
    children: [
      {
        path: '',
        name: 'PublishJenkinsList',
        component: () => import('@/views/publish/jenkins/PublishJenkinsList'),
        meta: { title: i18n.t('route.PublishJenkinsList') }
      },
      {
        path: 'create',
        name: 'PublishJenkinsCreate',
        component: () => import('@/views/publish/jenkins/PublishJenkinsCreateUpdate'),
        meta: { title: i18n.t('route.PublishJenkinsCreate'), activeMenu: '/publish/jenkins' },
        hidden: true
      },
      {
        path: ':id/update',
        name: 'PublishJenkinsUpdate',
        component: () => import('@/views/publish/jenkins/PublishJenkinsCreateUpdate'),
        meta: { title: i18n.t('route.PublishJenkinsUpdate'), activeMenu: '/publish/jenkins', action: 'create' },
        hidden: true
      }
    ]
  },
  {
    path: 'history',
    name: 'PublishHistory',
    component: () => import('@/views/publish/PublishHistoryList'),
    meta: { title: i18n.t('route.PublishHistoryList') }
  }
]
