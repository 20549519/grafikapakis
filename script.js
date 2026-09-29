/* =========================================================
   SMK GRAFIKA VOKASI MANGLIAWAN
   SISTEM BKK + ALUMNI + MEDIA SOSIAL
   ========================================================= */

(function () {

  /* ===============================
     KONFIGURASI
     =============================== */

  const WA_BKK = "6283834495750";

  const FACEBOOK_URL = "https://www.facebook.com/grafikavokasi";
  const INSTAGRAM_URL = "https://www.instagram.com/grafikavokasi/";
  const TIKTOK_URL = "https://www.tiktok.com/@grafikapgri";
   
  /* ===============================
     MENU MOBILE
     =============================== */

  window.toggleMenu = function () {
    const nav = document.getElementById("nav");

    if (nav) {
      nav.classList.toggle("active");
    }
  };

  document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {

      const nav = document.getElementById("nav");

      if (nav) {
        nav.classList.remove("active");
      }

    });
  });


  /* ===============================
     TAMBAHKAN MENU ALUMNI
     =============================== */

  const nav = document.getElementById("nav");

  if (nav && !document.querySelector('nav a[href="#alumni"]')) {

    const alumniMenu = document.createElement("a");

    alumniMenu.href = "#alumni";
    alumniMenu.textContent = "Alumni";

    nav.insertBefore(
      alumniMenu,
      nav.querySelector('a[href="#kontak"]')
    );

    alumniMenu.addEventListener("click", function () {
      nav.classList.remove("active");
    });

  }


  /* ===============================
     TAMBAHKAN TOMBOL INDUSTRI
     =============================== */

  const bkkSection = document.getElementById("bkk");

  if (bkkSection) {

    const bkkWrap = bkkSection.querySelector(".wrap");

    if (bkkWrap && !document.getElementById("portal-bkk")) {

      const portal = document.createElement("div");

      portal.id = "portal-bkk";

      portal.innerHTML = `

      <div style="
        margin-top:35px;
        padding:30px;
        border-radius:20px;
        background:linear-gradient(135deg,#0f172a,#1e3a8a);
        color:white;
        box-shadow:0 15px 40px rgba(15,23,42,.18);
      ">

        <div style="
          text-align:center;
          margin-bottom:25px;
        ">

          <div style="
            font-size:14px;
            color:#fbbf24;
            font-weight:bold;
            letter-spacing:2px;
          ">
            PORTAL DUNIA KERJA
          </div>

          <h2 style="
            margin:8px 0;
            font-size:30px;
          ">
            INDUSTRI & SMK GRAFIKA
          </h2>

          <p style="
            color:#dbeafe;
            max-width:700px;
            margin:auto;
          ">
            Industri dapat menyampaikan kebutuhan tenaga kerja,
            lowongan pekerjaan, serta kebutuhan siswa untuk
            Magang/PKL melalui BKK SMK GRAFIKA.
          </p>

        </div>


        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:18px;
        ">


          <!-- TENAGA KERJA -->

          <div style="
            background:white;
            color:#1e293b;
            padding:25px;
            border-radius:16px;
          ">

            <div style="font-size:35px;">
              👨‍💼
            </div>

            <h3>
              Cari Tenaga Kerja
            </h3>

            <p style="
              color:#64748b;
              font-size:14px;
            ">
              Sampaikan kebutuhan tenaga kerja
              sesuai kompetensi Grafika dan DKV.
            </p>

            <button
              onclick="window.bukaFormBKK('TENAGA KERJA')"
              style="
                width:100%;
                padding:12px;
                border:0;
                border-radius:10px;
                background:#2563eb;
                color:white;
                font-weight:bold;
                cursor:pointer;
              "
            >
              KIRIM KEBUTUHAN
            </button>

          </div>


          <!-- MAGANG -->

          <div style="
            background:white;
            color:#1e293b;
            padding:25px;
            border-radius:16px;
          ">

            <div style="font-size:35px;">
              🎓
            </div>

            <h3>
              Cari Siswa Magang / PKL
            </h3>

            <p style="
              color:#64748b;
              font-size:14px;
            ">
              Industri dapat menyampaikan kebutuhan
              siswa untuk Magang/PKL.
            </p>

            <button
              onclick="window.bukaFormBKK('MAGANG / PKL')"
              style="
                width:100%;
                padding:12px;
                border:0;
                border-radius:10px;
                background:#16a34a;
                color:white;
                font-weight:bold;
                cursor:pointer;
              "
            >
              AJUKAN MAGANG
            </button>

          </div>


          <!-- LOWONGAN -->

          <div style="
            background:white;
            color:#1e293b;
            padding:25px;
            border-radius:16px;
          ">

            <div style="font-size:35px;">
              📢
            </div>

            <h3>
              Posting Lowongan
            </h3>

            <p style="
              color:#64748b;
              font-size:14px;
            ">
              Kirim informasi lowongan dan
              poster/pamflet perusahaan.
            </p>

            <button
              onclick="window.bukaFormBKK('LOWONGAN KERJA')"
              style="
                width:100%;
                padding:12px;
                border:0;
                border-radius:10px;
                background:#f59e0b;
                color:white;
                font-weight:bold;
                cursor:pointer;
              "
            >
              POSTING LOWONGAN
            </button>

          </div>

        </div>

      </div>

      `;

      bkkWrap.appendChild(portal);

    }

  }


  /* ===============================
     FORM BKK
     =============================== */

  window.bukaFormBKK = function (jenis) {

    const old = document.getElementById("modal-bkk");

    if (old) {
      old.remove();
    }


    const modal = document.createElement("div");

    modal.id = "modal-bkk";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(2,6,23,.75);
      z-index:99999;
      overflow:auto;
      padding:20px;
    `;


    modal.innerHTML = `

    <div style="
      max-width:700px;
      margin:30px auto;
      background:white;
      border-radius:20px;
      padding:30px;
      position:relative;
    ">

      <button
        onclick="document.getElementById('modal-bkk').remove()"
        style="
          position:absolute;
          right:18px;
          top:15px;
          border:0;
          background:#fee2e2;
          color:#991b1b;
          width:35px;
          height:35px;
          border-radius:50%;
          font-size:20px;
          cursor:pointer;
        "
      >
        ×
      </button>


      <div style="
        text-align:center;
        margin-bottom:25px;
      ">

        <div style="font-size:40px;">
          🏢
        </div>

        <h2>
          FORM PENGAJUAN INDUSTRI
        </h2>

        <p style="color:#64748b;">
          ${jenis}
        </p>

      </div>


      <form id="form-industri">

        <input type="hidden"
          id="jenis-kebutuhan"
          value="${jenis}"
        >


        <label>
          Nama Perusahaan *
        </label>

        <input
          id="nama-perusahaan"
          required
          placeholder="Contoh: PT Grafika Indonesia"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Nama PIC / Penanggung Jawab *
        </label>

        <input
          id="nama-pic"
          required
          placeholder="Nama PIC"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Nomor WhatsApp Perusahaan *
        </label>

        <input
          id="wa-perusahaan"
          required
          placeholder="08xxxxxxxxxx"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Posisi / Kompetensi yang Dibutuhkan *
        </label>

        <input
          id="posisi"
          required
          placeholder="Contoh: Desain Grafis / Operator Printing"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Jumlah Orang
        </label>

        <input
          id="jumlah"
          type="number"
          min="1"
          value="1"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Lokasi Kerja / Magang
        </label>

        <input
          id="lokasi"
          placeholder="Contoh: Kabupaten Malang"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Kualifikasi / Kompetensi
        </label>

        <textarea
          id="kualifikasi"
          rows="4"
          placeholder="Tuliskan kompetensi yang dibutuhkan..."
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        ></textarea>


        <label>
          Batas Pendaftaran
        </label>

        <input
          id="batas"
          type="date"
          style="width:100%;padding:12px;margin:6px 0 15px;border:1px solid #cbd5e1;border-radius:8px;"
        >


        <label>
          Poster / Pamflet Lowongan
        </label>

        <input
          id="poster"
          type="file"
          accept="image/*"
          style="width:100%;padding:12px;margin:6px 0 10px;"
        >

        <div
          id="preview-poster"
          style="
            display:none;
            margin:10px 0 20px;
            text-align:center;
          "
        >

          <p style="font-weight:bold;">
            Pratinjau Poster
          </p>

          <img
            id="gambar-poster"
            style="
              max-width:100%;
              max-height:350px;
              border-radius:10px;
              border:1px solid #e2e8f0;
            "
          >

        </div>


        <button
          type="submit"
          style="
            width:100%;
            padding:15px;
            border:0;
            border-radius:10px;
            background:#16a34a;
            color:white;
            font-size:16px;
            font-weight:bold;
            cursor:pointer;
          "
        >
          📲 KIRIM PENGAJUAN KE BKK
        </button>


        <p style="
          font-size:12px;
          color:#64748b;
          margin-top:12px;
          text-align:center;
        ">
          Pengajuan akan diteruskan kepada BKK
          SMK GRAFIKA untuk diverifikasi.
        </p>

      </form>

    </div>

    `;


    document.body.appendChild(modal);


    /* PREVIEW POSTER */

    const poster =
      document.getElementById("poster");

    poster.addEventListener("change", function () {

      const file = this.files[0];

      if (!file) return;

      const reader =
        new FileReader();

      reader.onload = function (e) {

        document.getElementById(
          "gambar-poster"
        ).src = e.target.result;

        document.getElementById(
          "preview-poster"
        ).style.display = "block";

      };

      reader.readAsDataURL(file);

    });


    /* KIRIM KE WHATSAPP */

    document.getElementById(
      "form-industri"
    ).addEventListener("submit", function (e) {

      e.preventDefault();


      const jenis =
        document.getElementById(
          "jenis-kebutuhan"
        ).value;

      const perusahaan =
        document.getElementById(
          "nama-perusahaan"
        ).value;

      const pic =
        document.getElementById(
          "nama-pic"
        ).value;

      const wa =
        document.getElementById(
          "wa-perusahaan"
        ).value;

      const posisi =
        document.getElementById(
          "posisi"
        ).value;

      const jumlah =
        document.getElementById(
          "jumlah"
        ).value;

      const lokasi =
        document.getElementById(
          "lokasi"
        ).value;

      const kualifikasi =
        document.getElementById(
          "kualifikasi"
        ).value;

      const batas =
        document.getElementById(
          "batas"
        ).value;


      const pesan =

`PERMOHONAN INDUSTRI - BKK SMK GRAFIKA

Jenis:
${jenis}

Nama Perusahaan:
${perusahaan}

Nama PIC:
${pic}

WhatsApp Perusahaan:
${wa}

Posisi / Kompetensi:
${posisi}

Jumlah:
${jumlah}

Lokasi:
${lokasi}

Kualifikasi:
${kualifikasi}

Batas Pendaftaran:
${batas}

Perusahaan akan mengirimkan poster/pamflet melalui WhatsApp setelah pesan ini dikirim.

Mohon ditindaklanjuti oleh BKK SMK GRAFIKA.

Terima kasih.`;


      const url =
        "https://wa.me/" +
        WA_BKK +
        "?text=" +
        encodeURIComponent(pesan);


      window.open(
        url,
        "_blank"
      );

    });

  };


  /* ===============================
     ALUMNI
     =============================== */

  if (
    !document.getElementById("alumni")
  ) {

    const contact =
      document.getElementById("kontak");

    if (contact) {

      const alumni =
        document.createElement("section");

      alumni.id = "alumni";

      alumni.style.background =
        "#f8fafc";

      alumni.innerHTML = `

      <div class="wrap">

        <div class="section-title">

          <span>
            ALUMNI GRAFIKA
          </span>

          <h2>
            Kabar & Kegiatan Alumni
          </h2>

          <p>
            Ruang informasi reuni, HUT alumni,
            kegiatan sosial dan silaturahmi
            keluarga besar SMK GRAFIKA.
          </p>

        </div>


        <div class="cards">


          <div class="card">

            <div class="icon">
              🎉
            </div>

            <h3>
              Reuni Alumni
            </h3>

            <p>
              Informasi reuni dan kegiatan
              silaturahmi alumni Grafika.
            </p>

            <br>

            <button
              onclick="window.bukaInfoAlumni('REUNI ALUMNI')"
              style="
                padding:10px 16px;
                border:0;
                border-radius:8px;
                background:#2563eb;
                color:white;
                cursor:pointer;
                font-weight:bold;
              "
            >
              LIHAT INFORMASI
            </button>

          </div>


          <div class="card">

            <div class="icon">
              🎂
            </div>

            <h3>
              HUT Alumni
            </h3>

            <p>
              Informasi ulang tahun alumni
              dan ucapan keluarga besar Grafika.
            </p>

            <br>

            <button
              onclick="window.bukaInfoAlumni('HUT ALUMNI')"
              style="
                padding:10px 16px;
                border:0;
                border-radius:8px;
                background:#f59e0b;
                color:white;
                cursor:pointer;
                font-weight:bold;
              "
            >
              LIHAT INFORMASI
            </button>

          </div>


          <div class="card">

            <div class="icon">
              📱
            </div>

            <h3>
              Media Sosial
            </h3>

            <p>
              Ikuti informasi terbaru
              SMK GRAFIKA melalui media sosial resmi.
            </p>

            <br>

            <a
              href="${FACEBOOK_URL}"
              target="_blank"
              class="btn btn-primary"
            >
              FACEBOOK
            </a>

            <a
              href="${INSTAGRAM_URL}"
              target="_blank"
              class="btn btn-primary"
              style="margin-left:5px;"
            >
              INSTAGRAM
            </a>
            
            <a
            href="${TIKTOK_URL}"
            target="_blank"
            class="btn btn-primary"
            style="margin-left:5px;"
          >
            TIKTOK
          </a>

          </div>


        </div>

      </div>

      `;


      contact.parentNode.insertBefore(
        alumni,
        contact
      );

    }

  }


  /* ===============================
     INFO ALUMNI
     =============================== */

  window.bukaInfoAlumni =
    function (jenis) {

      alert(
        "Informasi " +
        jenis +
        " dapat ditambahkan oleh admin BKK/Alumni."
      );

    };


})();
