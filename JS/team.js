// ============================================================
// 合作团队总览页的渲染逻辑。
// 读取 teams.js 的 TEAMS 数组，按 REGIONS 定义的地区顺序分组，
// 把每个团队渲染成一张卡片。
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

  // 平台按钮。链接为 "#" 时只显示，不跳转。
  function renderLinks(links) {
    if (!links) return "";
    var keys = Object.keys(links);
    if (!keys.length) return "";

    var html = '<div class="platform-links">';

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var url = links[key];
      if (!url) continue;

      var label = (typeof PLATFORMS !== "undefined" && PLATFORMS[key]) ? PLATFORMS[key] : key;

      if (url === "#") {
        html += '<span class="platform-btn">' + esc(label) + '</span>';
      } else {
        html += '<a class="platform-btn" href="' + esc(url) + '" target="_blank" ' +
                   'rel="noopener noreferrer" style="cursor:pointer;">' + esc(label) + '</a>';
      }
    }

    html += '</div>';
    return html;
  }

  function renderTeamCard(team) {
    var html = '<div class="team-card">';

    html += '<span class="team-tag">' + bi("Independent Partner Team", "独立合作团队") + '</span>';

    html += '<h3 style="margin-bottom:6px;">' + bi(team.nameEn, team.nameZh) + '</h3>';

    html += '<p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:16px;">' +
              bi(team.bioEn, team.bioZh) +
            '</p>';

    html += '<a class="btn-outline" href="profile.html?id=' + esc(team.id) + '">' +
              bi("View Portfolio", "查看作品") +
            '</a>';

    html += renderLinks(team.links);

    html += '</div>';
    return html;
  }

  // 按地区分组渲染。没有团队的地区不显示。
  function renderAll() {
    if (typeof TEAMS === "undefined" || typeof REGIONS === "undefined") return "";

    var html = "";

    for (var r = 0; r < REGIONS.length; r++) {
      var region = REGIONS[r];

      var members = TEAMS.filter(function (t) { return t.region === region.key; });
      if (!members.length) continue;

      html += '<h3 style="margin:0 0 20px; font-size:1.25rem;">' +
                bi(region.en, region.zh) +
              '</h3>';

      html += '<div class="grid" style="margin-bottom:48px;">';
      for (var i = 0; i < members.length; i++) {
        html += renderTeamCard(members[i]);
      }
      html += '</div>';
    }

    return html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("teams-root");
    if (!root) return;
    root.innerHTML = renderAll();
  });

})();
