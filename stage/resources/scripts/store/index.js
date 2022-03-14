import Alpine from 'alpinejs';

export default () => {
  document.addEventListener('alpine:init', () => {
    Alpine.store('store', false);
  });
};
