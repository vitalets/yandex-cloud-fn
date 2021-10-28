import assert from 'assert';

type AssertType = typeof assert;

declare global {
  const assert: AssertType;
}

Object.assign(global, {
  assert,
});

