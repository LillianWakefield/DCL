function hello(name) {
  if (name != undefined) {
  return 'Hello, ' + name + '!'
  }
  else {
      return 'Hello world.'
  }
}
document.write(hello('lilli'));
document.write(hello());
