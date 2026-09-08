// ============================================================
// 读取网址里的 ?id=xxx 参数，从 teams.js 的 TEAMS 数组里
// 找到对应团队，把资料和作品图渲染到页面上。
//
// 例：limidation.com/profile.html?id=jerry
//
// 这个文件通常不需要改动。增加团队请改 JS/teams.js。
// ============================================================

(function () {

  function esc(str) {
    return String(str === undefined || str === null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function bi(en, zh) {
    return '<span data-en>' + esc(en) + '</span><span data-zh>' + esc(zh) + '</span>';
  }

  function getId() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    return id ? id.trim().toLowerCase() : "";
  }

  function findTeam(id) {
    if (!id || typeof TEAMS === "undefined") return null;
    for (var i = 0; i < TEAMS.length; i++) {
      if (TEAMS[i].id === id) return TEAMS[i];
    }
    return null;
  }

  // 渲染一组作品图。photos 为空时显示灰色占位框。
  function renderPhotoGrid(photos, slots, titleEn, titleZh) {
    var html = '<h3 style="margin:36px 0 16px;">' + bi(titleEn, titleZh) + '</h3>';
    html += '<div class="photo-grid">';

    if (photos && photos.length) {
      for (var i = 0; i < photos.length; i++) {
        html += '<img src="' + esc(photos[i]) + '" alt="' + esc(titleEn) + '" loading="lazy" ' +
                     'style="width:100%; height:190px; object-fit:cover; border-radius:6px; display:block;" ' +
                     'onerror="this.style.display=\'none\';">';
      }
    } else {
      for (var j = 0; j < slots; j++) {
        html += '<div class="photo-placeholder">' +
                  bi("Photo coming soon", "照片待上传") +
                '</div>';
      }
    }

    html += '</div>';
    return html;
  }

  // 渲染平台按钮。链接为 "#" 时不跳转。
  function renderLinks(links) {
    if (!links) return "";
    var keys = Object.keys(links);
    if (!keys.length) return "";

    var html = '<div class="platform-links" style="justify-content:center;">';

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var url = links[key];
      if (!url) continue;

      var label = (typeof PLATFORMS !== "undefined" && PLATFORMS[key]) ? PLATFORMS[key] : key;
      var isPlaceholder = (url === "#");

      if (isPlaceholder) {
        html += '<span class="platform-btn">' + esc(label) + '</span>';
      } else {
        html += '<a class="platform-btn" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer" ' +
                   'style="cursor:pointer;">' + esc(label) + '</a>';
      }
    }

    html += '</div>';
    return html;
  }

  function renderNotFound() {
    return '<h2>' + bi("Portfolio Not Found", "未找到该作品集") + '</h2>' +
           '<p class="lead" style="margin-bottom:28px;">' +
             bi("The portfolio you are looking for is not available. Browse all partner teams instead.",
                "您访问的作品集不存在。您可以浏览全部合作团队。") +
           '</p>' +
           '<p style="text-align:center;">' +
             '<a href="team.html" class="btn">' + bi("View All Teams", "查看全部团队") + '</a>' +
           '</p>';
  }

  function renderTeam(team) {
    var slots = (typeof PHOTO_SLOTS !== "undefined") ? PHOTO_SLOTS : { indoor: 9, outdoor: 9 };
    var html = "";

    html += '<h2 style="margin-bottom:12px;">' + bi(team.nameEn, team.nameZh) + '</h2>';

    html += '<p style="text-align:center; margin-bottom:8px;">' +
              '<span class="team-tag">' + bi("Independent Partner Team", "独立合作团队") + '</span>' +
            '</p>';

    html += '<p class="lead">' + bi(team.bioEn, team.bioZh) + '</p>';

    html += renderLinks(team.links);

    if (team.photos) {
      html += renderPhotoGrid(team.photos.indoor, slots.indoor, "Interior Work", "室内作品");
      html += renderPhotoGrid(team.photos.outdoor, slots.outdoor, "Exterior Work", "室外作品");
    }

    return html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("profile-root");
    if (!root) return;

    var team = findTeam(getId());

    if (team) {
      root.innerHTML = renderTeam(team);
      document.title = team.nameEn + " — Limidation Construction Inc.";
    } else {
      root.innerHTML = renderNotFound();
    }
  });

})();
