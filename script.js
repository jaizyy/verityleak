document.querySelectorAll('.item img, .item video').forEach(element => {
  element.addEventListener('click', function() {
    const link = this.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});
