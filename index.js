import{S as y,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="46160899-12bbcf382b0949676f8e01c93";function g(s){const o=new URLSearchParams({key:p,q:s.query,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(t=>{if(!t.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.json()}).catch(t=>{throw new Error("Network error occurred. Please check your connection or try again later.")})}function b(s,o){const t=s.map(({webformatURL:a,largeImageURL:e,tags:r,likes:n,views:u,comments:f,downloads:m})=>`
    <li class ="gallery-item">
      <a href="${e}" class="gallery-link">
        <img src="${a}" alt="${r}" class="gallery-image" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${n}</p>
          <p class="info-item"><b>Views:</b> ${u}</p>
          <p class="info-item"><b>Comments:</b> ${f}</p>
          <p class="info-item"><b>Downloads:</b> ${m}</p>
        </div>
      </a>
      </li>`).join("");o.insertAdjacentHTML("beforeend",t)}const L=document.querySelector(".search-form"),l=document.querySelector(".gallery"),i=document.querySelector(".loader"),w=new y(".gallery a",{captionsData:"alt",captionDelay:250});function c(s){h.error({title:"Error",message:s})}L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.searchQuery.value.trim();if(!o){c("Please enter a search term."),i.style.display="none";return}i.style.display="block",l.innerHTML="",g({query:o}).then(t=>{t.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(b(t.hits,l),w.refresh())}).catch(t=>{c(t.message)}).finally(()=>{i.style.display="none"})});
//# sourceMappingURL=index.js.map
