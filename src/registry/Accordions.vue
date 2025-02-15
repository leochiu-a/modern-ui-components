<template>
  <details name="faq" open>
    <summary>Can I request a refund?</summary>
    <div>
      Yes, you have up to 30 days to request a refund. See our T&C for details.
    </div>
  </details>

  <!-- etc. -->
  <details name="faq">
    <summary>What data do you store?</summary>
    <div>
      We use some anonymized visitor stats for the purpose of improving the
      service reliability. See our Privacy Policy for more information.
    </div>
  </details>

  <details name="faq">
    <summary>Are all products organic?</summary>
    <div>
      We do our best to ensure all ingredients are organic, but some exceptions
      are listed on each product page under "ingredients".
    </div>
  </details>
</template>

<style>
details {
  background: white;
  border: 1px solid #aaa;
  transition: all 0.5s ease;
}

details[open]:not(:first-child) {
  margin-top: 0.5rem;
}
details[open]:not(:last-child) {
  margin-bottom: 0.5rem;
}

summary {
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  height: 3rem;
  padding: 0 0.5rem;

  /* Roll our own marker */
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::marker {
    content: "";
  }
  &::after {
    content: "+";
  }
  [open] &::after {
    content: "-";
  }

  &:hover {
    color: #666;
  }
}

::details-content {
  transition: all 0.5s ease, content-visibility 0.5s ease allow-discrete; /* Rely on the special animation powers of content-visibility */
  height: 0;
  overflow: clip; /* Clip off contents while animating */
  padding: 0 0.5rem;
}

@supports (interpolate-size: allow-keywords) {
  :root {
    interpolate-size: allow-keywords;
  }

  [open]::details-content {
    height: auto;
    padding-bottom: 0.5em;
  }
}
</style>
