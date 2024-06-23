import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { defaultVuetify } from '@/vuetifyInstance'

import CanvasItem from '@/components/CanvasItem.vue'

const vuetify = defaultVuetify()

describe('CanvasItem', () => {
  it('renders props.msg when passed', () => {
    const width = 800
    const height = 600
    const title = 'title'
    const wrapper = mount(CanvasItem, {
      props: { canvasWidth: width, canvasHeight: height, title: title },
      global: {
        plugins: [vuetify]
      }
    })
    //expect(wrapper.text()).
  })
})
