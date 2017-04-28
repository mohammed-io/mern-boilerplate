if (process.env.NODE_ENV === 'production') {
  export default './store.prod';
} else {
  export default './store.dev';
}