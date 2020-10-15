class Intern {
    constructor (name, email, id, schoolnameForintern) {
        this.name = name;
        this.email = email;
        this.schoolnameForintern = schoolnameForintern;
        this.id = id;
        this.role = "Intern";
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getschoolnameForintern() {
        return this.schoolnameForintern;
    }
    getRole() {
        return "Intern";
    }
    addProfile(){
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${this.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Office number: ${this.schoolnameForintern}</li>
        </ul>
    </div>
</div>
        `
    }
}

module.exports = Intern;