document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#hero-slider .slide');
  let current = 0;
  function nextSlide() {
    slides[current].classList.add('hidden');
    current = (current + 1) % slides.length;
    slides[current].classList.remove('hidden');
  }
  setInterval(nextSlide, 5000);
  slides[current].classList.remove('hidden');
  // ... (rest of the search code follows)
});
  // Search with Fuse.js
  const reviews = [
    {% for review in site.reviews %}
      { title: "{{ review.title }}", url: "{{ review.url }}", category: "{{ review.category }}" },
    {% endfor %}
  ];
  const fuse = new Fuse(reviews, { keys: ['title', 'category'] });
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const resultsDiv = document.getElementById('search-results');

  function updateResults() {
    const query = searchInput.value;
    const category = categoryFilter.value;
    let results = fuse.search(query).map(result => result.item);
    if (category) results = results.filter(r => r.category === category);
    resultsDiv.innerHTML = results.map(r => `
      <div class="bg-white p-4 rounded shadow">
        <h3>${r.title}</h3>
        <a href="${r.url}" class="text-blue-600">Read</a>
      </div>
    `).join('');
  }

  searchInput.addEventListener('input', updateResults);
  categoryFilter.addEventListener('change', updateResults);
});
