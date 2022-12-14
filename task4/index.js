function quote(name, year, text) {
  console.log(`${text}\n-- ${name} (${year})`);
}

function curriedQuote(name) {
  return (year, text) => {
    quote(name, year, text);
  }
}

const quoteCrockford = curriedQuote("Doug Crockford");

quoteCrockford(
  2008,
  "JavaScript is an astonishing language, in the very worst sense."
);

// JavaScript is an astonishing language, in the very worst sense.
// -- Doug Crockford (2008)
