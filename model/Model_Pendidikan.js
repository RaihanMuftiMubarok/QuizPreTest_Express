const connection = require('../config/database');

class Model_Pendidikan {

    static async getAll() {
        return new Promise((resolve, reject) =>{
            connection.query('SELECT a.id_pendidikan,b.nama_depan, b.id_mahasiswa, a.nama_instansi, a.jurusan, a.tahun_masuk, a.tahun_lulus, a.nomor_ijazah  FROM pendidikan as a INNER JOIN mahasiswa as b ON a.id_mahasiswa = b.id_mahasiswa ORDER BY a.id_pendidikan DESC', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async Store(Data) {
        return new Promise((resolve, reject) => {
            connection.query('insert into pendidikan set ?', Data, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }

    static async getId(id) {
        return new Promise((resolve, reject) =>{
            connection.query('select * from pendidikan where id_pendidikan= ' + id, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static async Update(id, Data) {
        return new Promise((resolve, reject) => {
            connection.query('update pendidikan set ? where id_pendidikan= ' + id, Data, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }

    static async Delete(id) {
        return new Promise((resolve, reject) => {
            connection.query('delete from pendidikan where id_pendidikan = ' + id, function(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        });
    }
}

module.exports = Model_Pendidikan;