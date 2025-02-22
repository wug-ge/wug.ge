import MyComponent from '../AboutMe.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest';
import AboutMe from '../AboutMe.vue';

describe('AboutMe', () => {
  it('renders correctly', async() => {
    const component = await mountSuspended(AboutMe)
    expect(component.text()).toContain(`I'm a freelance web developer`)
  });
});
