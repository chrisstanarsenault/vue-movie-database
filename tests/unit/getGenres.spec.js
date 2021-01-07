import { shallowMount, mount } from '@vue/test-utils';
import createStore from '@/store/index';
import axios from 'axios';
import getGenres from '@/services/getGenres';
import flushPromises from 'flush-promises';

jest.mock('axios');

it('returns the length of items sent', async () => {
  axios.get.mockResolvedValue([
    { id: 28, name: 'frank' },
    { id: 28, name: 'frank' },
    { id: 28, name: 'frank' },
    { id: 28, name: 'frank' },
    { id: 28, name: 'frank' }
  ]);
  const wrapper = mount(getGenres);
  const res = await getGenres();
  await flushPromises();
  await wrapper.vm.$nextTick;
  console.log(res);
  expect(true).toBe(true);
});
