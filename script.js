const buttons = document.querySelectorAll(".actions button");
const pendingCount = document.getElementById("pendingCount");

let count = 3;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const postCard = this.closest(".post-card");

        if (postCard) {
            let actionType = this.className;

            if (actionType === "approve") {
                alert("Post Approved ✅");
            }
            else if (actionType === "remove") {
                alert("Post Removed ❌");
            }
            else if (actionType === "warn") {
                alert("Warning Sent to User ⚠️");
            }

            postCard.remove();

            count--;
            pendingCount.textContent = count;

            if (count === 0) {
                document.getElementById("postsContainer").innerHTML =
                    "<h3>All reports cleared 🎉</h3>";
            }
        }
    });
});