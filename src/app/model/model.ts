export interface Data1{
    daerah: string;
    tahun: string;
    jumlah: string;
    persentase: string;
}
  
export interface Data2{
    pulau: string;
    pp_perkotaan: number;
    pp_perdesaan: number;
    pp_total: number;
    jp_perkotaan: number;
    jp_perdesaan: number;
    jp_total: number;
}
  
export interface Data3{
    provinsi: string;
    kota_sep_22: string;
    kota_mar_23: string;
    desa_sep_22: string;
    desa_mar_23: string;
    total_sep_22: string;
    total_mar_23: string;
}

export interface Data4{
    provinsi: string;
    kota_sep_22: number;
    kota_mar_23: number;
    desa_sep_22: number;
    desa_mar_23: number;
    total_sep_22: number;
    total_mar_23: number;
}

export interface Data5{
    provinsi: string;
    gk_kapita_sep_22: number;
    jumlah_art_rt_sep_22: number;
    gk_rt_sep_22: number;
    gk_kapita_mar_23: number;
    jumlah_art_rt_mar_23: number;
    gk_rt_mar_23: number;
}

export interface Data6{
    id: number;
    imgId: string;
    src: string;
}

export interface Member{
    id: number;
    name: string;
    role: string;
    profile: string;
}

export interface PopularNews{
    id: number;
    number: string;
    title: string;
    area: string;
}

export interface Headlines{
    id: number;
    img: string;
    title: string;
    area: string;
}

export interface OtherNews{
    id: number;
    img: string;
    title: string;
    area: string;
}