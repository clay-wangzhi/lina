import i18n from '@/i18n/i18n'

export const Required = {
  required: true, message: i18n.t('common.fieldRequiredError'), trigger: 'blur'
}

export const RequiredChange = {
  required: true, message: i18n.t('common.fieldRequiredError'), trigger: 'change'
}

export const EmailCheck = {
  type: 'email',
  message: i18n.t('common.InputEmailAddress'),
  trigger: ['blur', 'change']
}

export default {
  Required,
  RequiredChange,
  EmailCheck
}
