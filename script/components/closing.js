(function () {
  window.Components = window.Components || {};

  window.Components.closing = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-closing";
      div.innerHTML = `
        <p class="closing-text">${
          section.text || "Okay, now come back and tell me if you liked it."
        }</p>
        <p class="replay-btn" id="replay">${
          section.replayText || "Or click, if you want to watch it again."
        }</p>
        <p class="last-smile">:)</p>
      `;

      // 👉 Ẩn ngay từ đầu (QUAN TRỌNG - chống nháy)
      const ps = div.querySelectorAll("p");
      ps.forEach(p => p.style.opacity = 0);

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const ideaIn = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
      };

      const ps = el.querySelectorAll("p");

      tl.fromTo(
        ps,
        ideaIn,
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          skewX: "0deg",
          duration: 1,
          stagger: 1,
        }
      )
      // bật nút replay sau khi hiện
      .set(el.querySelector("#replay"), { pointerEvents: "auto" })
      // xoay icon cuối
      .to(
        el.querySelector(".last-smile"),
        {
          duration: 0.5,
          rotation: 90,
        },
        "+=1"
      );
    },
  };
})();
