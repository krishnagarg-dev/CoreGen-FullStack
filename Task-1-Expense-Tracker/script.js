const form = document.getElementById('form');
const list = document.getElementById('list');
let data = JSON.parse(localStorage.getItem('tx')) || [];

function save() { localStorage.setItem('tx', JSON.stringify(data)) }
function render() {
    list.innerHTML = '';
    let inc = 0, exp = 0;
    data.forEach((t, i) => {
        if (t.type === 'income') inc += t.amount; else exp += t.amount;
        const li = document.createElement('li');
        li.className = t.type === 'income' ? 'inc' : 'exp';
        li.innerHTML = `<div><b>${t.text}</b><br><small>${t.date}</small></div>
<div>${t.type === 'income' ? '+' : '-'}₹${t.amount}</div>
<button class="del" onclick="delTx(${i})">Delete</button>`;
        list.appendChild(li);
    });
    income.textContent = '₹' + inc;
    expense.textContent = '₹' + exp;
    balance.textContent = '₹' + (inc - exp);
    save();
}
form.onsubmit = e => {
    e.preventDefault();
    const text = document.getElementById('text').value.trim();
    const amount = +document.getElementById('amount').value;
    const type = document.getElementById('type').value;
    if (!text || amount <= 0) return alert('Enter valid data');
    data.push({ text, amount, type, date: new Date().toLocaleString() });
    form.reset();
    render();
}
function delTx(i) { data.splice(i, 1); render(); }
document.getElementById('clear').onclick = () => { if (confirm('Clear all?')) { data = []; render(); } }
render();
