const { imgToDataURL } = require('./utils');

const ArticleCard = async (data) => {
  const thumbnailBase64 = await imgToDataURL(data.profile_image);
  const namePosition = (210 - (data.display_name.length * 8.5)) / 2;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="270.933mm" height="82.55mm" version="1.2" baseProfile="tiny">
      <g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel">
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)"></g>
        <g fill="#4a4e51" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M5,0 L205,0 C207.761,0 210,2.23857 210,5 L210,307 C210,309.761 207.761,312 205,312 L5,312 C2.23857,312 0,309.761 0,307 L0,5 C0,2.23857 2.23857,0 5,0 M6,2 L204,2 C206.209,2 208,3.79086 208,6 L208,306 C208,308.209 206.209,310 204,310 L6,310 C3.79086,310 2,308.209 2,306 L2,6 C2,3.79086 3.79086,2 6,2 "/>
        </g>
        <g fill="#2d2d2d" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M5,1 L205,1 C207.209,1 209,2.79086 209,5 L209,307 C209,309.209 207.209,311 205,311 L5,311 C2.79086,311 1,309.209 1,307 L1,5 C1,2.79086 2.79086,1 5,1 "/>
        </g>
        <g fill="#3d3d3d" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,96)">
            <path vector-effect="none" fill-rule="evenodd" d="M1,-95 L209,-95 L209,311 L1,311 L1,-95 M5,1 L205,1 C207.209,1 209,2.79086 209,5 L209,307 C209,309.209 207.209,311 205,311 L5,311 C2.79086,311 1,309.209 1,307 L1,5 C1,2.79086 2.79086,1 5,1 "/>
        </g>
        <g fill="#4a4e51" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
            <image x="40" y="31" width="130" height="130" preserveAspectRatio="xMidYMid slice" xlink:href="${thumbnailBase64}"/>
        </g>
        <g fill="#f2f2f3" fill-opacity="1" stroke="#f2f2f3" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
            <text fill="#f2f2f3" fill-opacity="1" stroke="none" xml:space="preserve" x="${namePosition}" y="185" font-family="Arial" font-size="15" font-weight="700" font-style="normal">${data.display_name}</text>
        </g>
        <g fill="#f2f2f3" fill-opacity="1" stroke="#f2f2f3" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
            <text fill="#f2f2f3" fill-opacity="1" stroke="none" xml:space="preserve" x="48.5" y="245" font-family="Arial" font-size="16" font-weight="400" font-style="normal">${data.reputation}</text>
        </g>
        <g fill="#acb2b8" fill-opacity="1" stroke="#acb2b8" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
            <text fill="#acb2b8" fill-opacity="1" stroke="none" xml:space="preserve" x="88.5" y="245" font-family="Arial" font-size="16" font-weight="400" font-style="normal"> reputation</text>
        </g>
        <g fill="#f1b600" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M21,266 L70,266 C71.6569,266 73,267.343 73,269 L73,291 C73,292.657 71.6569,294 70,294 L21,294 C19.3431,294 18,292.657 18,291 L18,269 C18,267.343 19.3431,266 21,266 M22,268 L69,268 C70.1046,268 71,268.895 71,270 L71,290 C71,291.105 70.1046,292 69,292 L22,292 C20.8954,292 20,291.105 20,290 L20,270 C20,268.895 20.8954,268 22,268 "/>
        </g>
        <g fill="#5e553c" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M21,267 L70,267 C71.1046,267 72,267.895 72,269 L72,291 C72,292.105 71.1046,293 70,293 L21,293 C19.8954,293 19,292.105 19,291 L19,269 C19,267.895 19.8954,267 21,267 "/>
        </g>
        <g fill="#cfd2d6" fill-opacity="1" stroke="#cfd2d6" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
            <text fill="#cfd2d6" fill-opacity="1" stroke="none" xml:space="preserve" x="42" y="284" font-family="Arial" font-size="11" font-weight="400" font-style="normal">${data.badge_counts.gold}</text>
        </g>
        <g fill="#f1b600" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,26,277)">
            <path vector-effect="none" fill-rule="evenodd" d="M3,0 C4.65686,0 6,1.34315 6,3 C6,4.65686 4.65686,6 3,6 C1.34315,6 0,4.65686 0,3 C0,1.34315 1.34315,0 3,0 "/>
        </g>
        <g fill="#9a9c9f" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M80,266 L130,266 C131.657,266 133,267.343 133,269 L133,291 C133,292.657 131.657,294 130,294 L80,294 C78.3431,294 77,292.657 77,291 L77,269 C77,267.343 78.3431,266 80,266 M81,268 L129,268 C130.105,268 131,268.895 131,270 L131,290 C131,291.105 130.105,292 129,292 L81,292 C79.8954,292 79,291.105 79,290 L79,270 C79,268.895 79.8954,268 81,268 "/>
        </g>
        <g fill="#424242" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M80,267 L130,267 C131.105,267 132,267.895 132,269 L132,291 C132,292.105 131.105,293 130,293 L80,293 C78.8954,293 78,292.105 78,291 L78,269 C78,267.895 78.8954,267 80,267 "/>
        </g>
        <g fill="#cfd2d6" fill-opacity="1" stroke="#cfd2d6" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
            <text fill="#cfd2d6" fill-opacity="1" stroke="none" xml:space="preserve" x="101" y="284" font-family="Arial" font-size="11" font-weight="400" font-style="normal">${data.badge_counts.silver}</text>
        </g>
        <g fill="#9a9c9f" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,85,277)">
            <path vector-effect="none" fill-rule="evenodd" d="M3,0 C4.65686,0 6,1.34315 6,3 C6,4.65686 4.65686,6 3,6 C1.34315,6 0,4.65686 0,3 C0,1.34315 1.34315,0 3,0 "/>
        </g>
        <g fill="#ab825f" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M140,266 L189,266 C190.657,266 192,267.343 192,269 L192,291 C192,292.657 190.657,294 189,294 L140,294 C138.343,294 137,292.657 137,291 L137,269 C137,267.343 138.343,266 140,266 M141,268 L188,268 C189.105,268 190,268.895 190,270 L190,290 C190,291.105 189.105,292 188,292 L141,292 C139.895,292 139,291.105 139,290 L139,270 C139,268.895 139.895,268 141,268 "/>
        </g>
        <g fill="#4d433b" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,0,0)">
            <path vector-effect="none" fill-rule="evenodd" d="M140,267 L189,267 C190.105,267 191,267.895 191,269 L191,291 C191,292.105 190.105,293 189,293 L140,293 C138.895,293 138,292.105 138,291 L138,269 C138,267.895 138.895,267 140,267 "/>
        </g>
        <g fill="#cfd2d6" fill-opacity="1" stroke="#cfd2d6" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
            <text fill="#cfd2d6" fill-opacity="1" stroke="none" xml:space="preserve" x="161" y="284" font-family="Arial" font-size="11" font-weight="400" font-style="normal">${data.badge_counts.bronze}</text>
        </g>
        <g fill="#ab825f" fill-opacity="1" stroke="none" transform="matrix(1,0,0,1,145,277)">
            <path vector-effect="none" fill-rule="evenodd" d="M3,0 C4.65686,0 6,1.34315 6,3 C6,4.65686 4.65686,6 3,6 C1.34315,6 0,4.65686 0,3 C0,1.34315 1.34315,0 3,0 "/>
        </g>
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)"></g>
      </g>
    </svg>
  `;
};

module.exports = ArticleCard;