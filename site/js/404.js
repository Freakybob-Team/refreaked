/*
Freakybob.site Refreaked - A remastered version of Freakybob.site
Copyright (C) 2025 Freakybob Team

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const completeText = document.getElementById('completeText');
var percentage = 0;

function updateCompleteText() {
    percentage += parseInt(Math.random() * 10);
    if (percentage > 100) {
        percentage = 100;
        window.location.href = 'index.html';
    }

    completeText.innerText = percentage + '% complete';
    processCompleteText();
}

function processCompleteText() {
    setTimeout(updateCompleteText, Math.random() * (1000 - 500) + 500);
}

processCompleteText();