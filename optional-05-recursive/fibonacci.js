function fibonacci(n, sequence = [0, 1]) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return sequence;
  }
  
  return fibonacci(n - 1, [...sequence, sequence[sequence.length - 1] + sequence[sequence.length - 2]]);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
