import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const AddLocation = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  const handleButtonClick2 = () => {
    navigate('/list-location');
  };

  const formik = useFormik({
    initialValues: {
      cityName: '',
      countyName: ''
    },
    validationSchema: Yup.object({
      cityName: Yup
        .string()
        .max(255)
        .required('Şehir ismi boş bırakılamaz')
        .matches("^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$", "Sadece Harf Giriniz."),
      countyName: Yup
        .string()
        .max(64)
        .required('İlçe ismi boş bırakılamaz')
        .matches("^[a-zA-ZçÇğĞıİöÖşŞüÜ]+$", "Sadece Harf Giriniz.")

    }),
    onSubmit: async (values, helpers) => {
      try {
        const body = {
          cityName: formik.values.cityName.trim(),
          countyName: formik.values.countyName.trim()
        };

        const response = await axios.post('/location/add', body);
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Başarılı!',
          text: 'Şehir ve İlçe başarılı bir şekilde kaydedildi',
        });
      } catch (error) {
        console.error(error);
        helpers.setErrors({ submit: error.response.data.message });
        helpers.setSubmitting(false);
        Swal.fire({
          icon: 'error',
          title: 'Hata!',
          text: error.response.data.message,
        });
      }
    }
  });
  const handleChangeWithValidation = (e) => {
    const value = e.target.value;
    if (/^[a-zA-ZçÇğĞıİöÖşŞüÜ]*$/.test(value)) {
      formik.handleChange(e);
    }
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <br />
        <TextField
          error={!!(formik.touched.cityName && formik.errors.cityName)}
          fullWidth
          helperText={formik.touched.cityName && formik.errors.cityName}
          label="Şehir İsmi"
          name="cityName"
          size="large"
          onBlur={formik.handleBlur}
          onChange={handleChangeWithValidation}
          value={formik.values.cityName}
          inputProps={{ maxLength: 32 }}
        />
        <br />
        <br />
        <TextField
          error={!!(formik.touched.countyName && formik.errors.countyName)}
          fullWidth
          helperText={formik.touched.countyName && formik.errors.countyName}
          label="İlçe İsmi"
          name="countyName"
          size="large"
          onBlur={formik.handleBlur}
          onChange={handleChangeWithValidation}
          value={formik.values.countyName}
          inputProps={{ maxLength: 32 }}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" disabled={!formik.values.countyName || !formik.values.countyName}>Kaydet</Button>
      </form>
      <br/>
      <br/>
      <button onClick={handleButtonClick}>Ana Sayfa</button>
      <button onClick={handleButtonClick2}>Şehir ve İlçeleri Görüntüle</button>
    </div>
  )
}


export default AddLocation