import React, { Component } from 'react';
import LogoImage from './img/logo.png';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="text-center">Daftar Siswa <br /> SMK Madinatulquran</h4>
                <img src={LogoImage} alt="Logo" className="d-block mx-auto" height="100" />
                <table>
                    <h5>Siswa Kelas XII</h5>
                    <tr>
                        <th>Nama</th>
                        <td>:</td>
                        <td>Daffa</td>
                    </tr>
                    <tr>
                        <th>NISN</th>
                        <td>:</td>
                        <td>12345678</td>
                    </tr>
                    <tr>
                        <th>Jurusan</th>
                        <td>:</td>
                        <td>Rekayasa Perangkat Lunak</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;