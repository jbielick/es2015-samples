import assert from 'assert';


















function update(notify = true) {
  return notify;
}



assert( update() );

assert( update(true) );

assert( update(undefined) );






















function lazyArg(now = process.hrtime()[1]) {
  return now;
}



assert( lazyArg() < lazyArg() );






























// use defaults in later defaults

function rpush(key, value, prefix = '', logPrefix = (prefix + 'LOG :')) {
  console.log(`${prefix}${key} << ${value}`);
  console.log(`${logPrefix} rpushed`);
}


rpush('test', 'value');

console.log();

rpush('test', 'value', 'namespace:', 'log:');


















console.log();