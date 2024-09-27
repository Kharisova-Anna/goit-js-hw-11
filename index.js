import{S as y,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="46160899-12bbcf382b0949676f8e01c93";function g(s){const o=new URLSearchParams({key:p,q:s.query,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),new Error("Network error occurred. Please check your connection or try again later.")})}function b(s,o){const r=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:u,comments:f,downloads:m})=>`
    <li class ="gallery-item">
      <a href="${e}" class="gallery-link">
        <img src="${a}" alt="${t}" class="gallery-image" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${n}</p>
          <p class="info-item"><b>Views:</b> ${u}</p>
          <p class="info-item"><b>Comments:</b> ${f}</p>
          <p class="info-item"><b>Downloads:</b> ${m}</p>
        </div>
      </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",r)}const L=document.querySelector(".search-form"),l=document.querySelector(".gallery"),i=document.querySelector(".loader"),w=new y(".gallery a",{captionsData:"alt",captionDelay:250});function c(s){h.error({title:"Error",message:s})}L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(!o){c("Please enter a search term."),i.style.display="none";return}i.style.display="block",l.innerHTML="",g({query:o}).then(r=>{r.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(b(r.hits,l),w.refresh())}).catch(r=>{console.error("Error:",r),c(r.message)}).finally(()=>{i.style.display="none"})});
//# sourceMappingURL=index.js.map
