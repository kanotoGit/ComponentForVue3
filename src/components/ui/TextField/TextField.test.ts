import { describe, it, expect, type TestOptions, expectTypeOf, assertType, type TestContext, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import TextField from './TextField.vue'

/** コンテキストにパラメータの追加 */
interface LocalTestContext {
  foo: string
}
beforeEach<LocalTestContext>(async (context) => {
  // typeof context is 'TestContext & LocalTestContext'
  context.foo = 'bar'
})

describe('TextField', () => {
  // it('renders properly', () => {
  //   const wrapper = mount(TextField, { props: { text: 'Hello Vitest' } })
  //   expect(wrapper.text()).to('Hello Vitest')
  // }, { timeout: 1000, repeats: 5, retry: 1 })

  // it('toUpperCase', () => {
  //   const result = 'foobar2'.toLocaleUpperCase()
  //   expect(result).toMatchSnapshot()
  //   expectTypeOf(result).toEqualTypeOf<string>()
  // })

  // it<LocalTestContext>('コンテキストのサンプル', (context: LocalTestContext) => {
  //   console.log(context.foo)
  // })

  // it('matcher拡張のサンプル', () => {
  //   // matcher拡張
  //   expect('foo').toBeFoo()
  // })

  it('入力値が数値の場合、number型がemitされること', async () => {
    const wrapper = mount(TextField, {
      props: {
        text: null,
        type: 'number',
      },
    });

    // 値の入力
    const input = wrapper.find('input');
    await input.setValue('123');

    // update:textのチェック
    const updateTextEmit = wrapper.emitted('update:text')
    expect(updateTextEmit).toBeTruthy();
    expect(updateTextEmit?.[0]?.[0]).toBe(123)

    // inputイベントのチェック
    const inputEmit = wrapper.emitted('input')
    expect(inputEmit).toBeTruthy();
    expect(inputEmit?.[0]?.[0]).toBe(123)
    expect(inputEmit?.[0]?.[1]).toBeInstanceOf(Event)

    // changeイベントのチェック
    const changeEmit = wrapper.emitted('change')
    expect(changeEmit).toBeTruthy();
    expect(changeEmit?.[0]?.[0]).toBe(123)
    expect(changeEmit?.[0]?.[1]).toBeInstanceOf(Event)

    expect(input).toMatchSnapshot()
  })
})
