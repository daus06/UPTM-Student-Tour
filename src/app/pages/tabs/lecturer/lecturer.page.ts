import { Component, OnInit,  } from '@angular/core';



@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.page.html',
  styleUrls: ['./lecturer.page.scss'],
})
export class LecturerPage implements OnInit {

  query: string = '';
  name: any[] = [];
  allname: any[] = [];
  


  constructor() { }

  ngOnInit() {
    this.allname = [
      { id: 1, name: 'NOORNAJWA BINTI MD AMIN', location: 'CS ROOM 1' , email: 'najwa' , extno: '778' , faculty: 'FCOM' , img: 'najwa.png'  },
      { id: 2, name: 'NORALIZA BINTI AZIZAN', location: 'CS ROOM 1' , email: 'noraliza' , extno: '778' , faculty: 'FCOM' , img: 'noraliza.png'  },
      { id: 3, name: 'TS. NOR SHAMSHILLAH BINTI KAMARZAMAN', location: 'CS ROOM 1' , email: 'shilla' , extno: '778' , faculty: 'FCOM' , img: 'shamshilah.png'  },
      { id: 5, name: 'FATANAH SYAZANA ZURAINE BINTI AHMAD', location: 'CS ROOM 1' , email: 'fatanah' , extno: '778' , faculty: 'FCOM' , img: 'fatanah.png'  },
      { id: 6, name: 'FARAH FARZANA BINTI ABDUL AZIZ', location: 'CS ROOM 1' , email: 'farah_aziz' , extno: '778' , faculty: 'FCOM' , img: 'farzana.png'  },
      { id: 7, name: 'RAZNIDA BT ISA', location: 'CS ROOM 1' , email: 'raznida' , extno: '778' , faculty: 'FCOM' , img: 'raznida.png'  },
      { id: 8, name: 'NUR SALWAN GASHLAN', location: 'CS ROOM 1' , email: 'salwan' , extno: '778' , faculty: 'FEHA' , img: 'salwan.png'  },
      { id: 9, name: 'NABIRA MANSOR', location: 'CS ROOM 1' , email: 'nabira' , extno: '778' , faculty: 'FEHA' , img: 'nabira.png'  },
      { id: 10, name: 'MUNIFAH ALWI', location: 'CS ROOM 1' , email: 'munifah' , extno: '778' , faculty: 'FEHA' , img: 'munifah.png'  },
      { id: 11, name: 'RUKHIYAH BINTI ADNAN', location: 'CS ROOM 2' , email: 'rukhiyah' , extno: '742' , faculty: 'FCOM' , img: 'rukhiyah.png'  },
      { id: 12, name: 'SITI ROBAYA BINTI JANTAN', location: 'CS ROOM 2' , email: 'robaya' , extno: '742' , faculty: 'FCOM' , img: 'robaya.jpg'  },
      { id: 13, name: 'NOR HAFIZA BINTI ABD SAMAD', location: 'CS ROOM 2' , email: 'hafiza' , extno: '742' , faculty: 'FCOM' , img: 'hafiza.png'  },
      { id: 14, name: 'AB ARIF SANUSI BIN ARIFIN', location: 'CS ROOM 2' , email: 'sanusi' , extno: '742' , faculty: 'FCOM' , img: 'sanusi.png'  },
      { id: 15, name: 'NURSHAFINAS BINTI ROSLAN', location: 'CS ROOM 2' , email: 'shafinas' , extno: '742' , faculty: 'FCOM' , img: 'shafinas.png'  },
      { id: 16, name: 'WAN ASIAH WAN MUHAMAD TAHIR', location: 'CS ROOM 2' , email: 'wanasiah' , extno: '742' , faculty: 'FCOM' , img: 'asiah.png'  },
      { id: 17, name: 'WAN NOR ASNIDA BINTI WAN JUSOH', location: 'FCOM OFFICE' , email: 'wnasnida' , extno: '753' , faculty: 'FCOM' , img: 'wanasnida.png'  },
      { id: 18, name: 'DR. FATIMAH BIBI HAMZA', location: 'FCOM OFFICE' , email: 'bibi' , extno: '753' , faculty: 'FCOM' , img: 'bibi.png'  },
      { id: 19, name: 'ZURINA BINTI JUSOH', location: 'FCOM OFFICE' , email: 'zurina' , extno: '753' , faculty: 'FCOM' , img: 'zurinajusoh.png'  },
      { id: 20, name: 'NOR ZAKIAH BINTI LAMIN', location: 'FCOM OFFICE' , email: 'nzakiah' , extno: '753' , faculty: 'FCOM' , img: 'zakiah.png'  },
      { id: 21, name: 'ELIZA SURAIYA BINTI TAHIR', location: 'FCOM OFFICE' , email: 'eliza' , extno: '753' , faculty: 'FCOM' , img: 'eliza.png'  },
      { id: 22, name: 'EMI AMIELDA BINTI AHMAD MOKHTAR', location: 'MATH ROOM' , email: 'amielda' , extno: '696' , faculty: 'FCOM' , img: 'emi.png'  },
      { id: 23, name: 'NOOR FARAH WAHIDA BINTI ABD RASHID', location: 'MATH ROOM' , email: 'noor_farah' , extno: '696' , faculty: 'FCOM' , img: 'farahwahida.png'  },
      { id: 24, name: 'AIDA SHAZRIN BINTI OTHMAN', location: 'MATH ROOM' , email: 'aida_syazrin' , extno: '696' , faculty: 'FCOM' , img: 'aida.png'  },
      { id: 25, name: 'SURIANA BINTI ISHAK', location: 'MATH ROOM' , email: 'suriana' , extno: '696' , faculty: 'FCOM' , img: 'suriana.png'  },
      { id: 26, name: 'KHAIRUL AZHAR BIN KHALID', location: 'FCOM OFFICE' , email: 'khairulazhar' , extno: '753' , faculty: 'FCOM' , img: 'azhar.png'  },
      { id: 27, name: 'DIYANA NUR BINTI NORAZMAN', location: 'MATH ROOM' , email: 'diyana' , extno: '696' , faculty: 'FBASS' , img: 'diyana.png'  },
      { id: 28, name: 'IMMIE ROZIANIE BINTI ABD RAHIM', location: 'MATH ROOM' , email: 'immie_rozianie' , extno: '696' , faculty: 'FBASS' , img: 'immie.png'  },
      { id: 29, name: 'SITI ARNIZAN MAT RIFIM', location: 'MATH ROOM' , email: 'siti_arnizan' , extno: '696' , faculty: 'FCOM' , img: 'arnizan.png'  },
      { id: 30, name: 'NOORRAHA BINTI ABDUL RAZAK', location: 'MATH ROOM' , email: 'noorraha' , extno: '696' , faculty: 'FCOM' , img: 'raha.png'  },
      { id: 31, name: 'HARLINAWATI BINTI ABDUL KADIR', location: 'IT ROOM' , email: 'harlinawati' , extno: '755' , faculty: 'FCOM' , img: 'harlina.png'  },
      { id: 32, name: 'ASLIMARIAH BINTI AHMAD', location: 'IT ROOM' , email: 'aslimariah' , extno: '755' , faculty: 'FCOM' , img: 'asli.png'  },
      { id: 33, name: 'NURI SURINA BINTI ABDUL HALIM', location: 'IT ROOM' , email: 'nuri' , extno: '755' , faculty: 'FCOM' , img: 'nuri.png'  },
      


    ];
  }

  onSearchChange(event : any) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.name = [];
    if(this.query.length > 0) {
      this.name = this.allname.filter((d) => {
        return d.name.toLowerCase().includes(this.query) || // Search by name
        d.faculty.toLowerCase().includes(this.query) || // Search by location
        d.location.toLowerCase().includes(this.query) ||
        !this.query
      });
    }
  }

  

}
