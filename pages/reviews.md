---
layout: default
title: All Reviews
---
{% include product-filter.html %}
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {% for review in site.reviews %}
    {% include review-card.html title=review.title image=review.image url=review.url %}
  {% endfor %}
</div>
