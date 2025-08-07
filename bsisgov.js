

document.addEventListener("DOMContentLoaded", function () {
    
    const shareLinks = document.querySelectorAll(".social-share a");

    shareLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const platform = this.textContent.toLowerCase();
            const article = this.closest(".news-card");
            const title = article.querySelector("h2 a").textContent;
            const url = window.location.origin + "/" + article.querySelector("h2 a").getAttribute("href");

            let shareUrl = "";

            if (platform.includes("linkedin")) {
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
            } else if (platform.includes("twitter")) {
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            }

            if (shareUrl) {
                window.open(shareUrl, "_blank", "width=600,height=400");
            }
        });
    });

    
});
