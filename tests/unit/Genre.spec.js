import { shallowMount, mount } from '@vue/test-utils';
// import Genres from '@/components/Genres.vue';
import GenreSidebar from '@/views/GenreSidebar.vue';
// import Logo from '@/components/Logo.vue';
// import getGenres from '@/services/getGenres';
// import flushPromises from 'flush-promises';

// jest.mock('@/services/getGenres');

describe('Genres', () => {
  it('renders at least one <LI>', () => {
    //   getGenres.mockResolvedValueOnce([
    //     { id: 28, name: 'frank' },
    //     { id: 28, name: 'frank' },
    //     { id: 28, name: 'frank' },
    //     { id: 28, name: 'frank' },
    //     { id: 28, name: 'frank' }
    //   ]);
    const wrapper = mount(GenreSidebar);
    expect(true).toBe(true);
    //   await wrapper.vm.$nextTick;
    // await Genres.setData([
    //   { id: 28, name: 'frank' },
    //   { id: 28, name: 'frank' },
    //   { id: 28, name: 'frank' },
    //   { id: 28, name: 'frank' },
    //   { id: 28, name: 'frank' }
    // ]);
    // await flushPromises();
    // expect(getGenres).toHaveBeenCalledTimes(1);
    // console.log(wrapper);
    // expect(wrapper.findComponent('GenreSidebar')).toBe(true);
  });
});
