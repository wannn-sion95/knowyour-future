 function perasaanCinta(jodohPria, jodohWanita, umurPria, umurWanita) {
        if (
          jodohPria == "" ||
          umurPria == "" ||
          jodohWanita == "" ||
          umurWanita == ""
        )
          return alert("Data tidak boleh kosong");
        document.write(
          jodohPria +
            " " +
            umurPria +
            " tahun" +
            " & " +
            jodohWanita +
            " " +
            umurWanita +
            " tahun"
        );
      }
