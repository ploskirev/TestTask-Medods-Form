<template>
  <div id="app">
    <form action="#" @submit.prevent="submitHandler">

      <fieldset>
        <legend>Атрибуты формы</legend>
        <div class="row">
          <label for="surname" class="label">Фамилия<sup class="required-mark">&#10038;</sup></label>
          <input 
            type="text" 
            id="surname" 
            class="input" 
            :class="{'is-invalid': $v.surname.$invalid && isTrySubmit}" 
            @input="inputHandler($v.surname)" 
            v-model="surname"
          >
          <div class="valid-err" v-show="$v.surname.$invalid && isTrySubmit">Введите фамилию</div>
        </div>
        <div class="row">
          <label for="name" class="label">Имя<sup class="required-mark">&#10038;</sup></label>
          <input 
            type="text" 
            id="name" 
            class="input" 
            :class="{'is-invalid': $v.name.$invalid && isTrySubmit}" 
            @input="inputHandler($v.name)" 
            v-model="name"
          >
          <div class="valid-err" v-show="$v.name.$invalid && isTrySubmit">Введите имя</div>
        </div>
        <div class="row">
          <label for="middle-name" class="label">Отчество</label>
          <input type="text" id="middle-name" class="input" v-model="middleName">
        </div>
        <div class="row">
          <label for="birthday" class="label">День рождения<sup class="required-mark">&#10038;</sup></label>
          <input 
            type="date" 
            id="birthday" 
            class="input" 
            :class="{'is-invalid': $v.birthday.$invalid && isTrySubmit}" 
            @input="inputHandler($v.birthday)" 
            v-model="birthday"
          >
          <div class="valid-err" v-show="$v.birthday.$invalid && isTrySubmit">Введите дату рождения</div>
        </div>
        <div class="row">
          <label for="phone-number" class="label">Номер телефона<sup class="required-mark">&#10038;</sup></label>
          <input 
            type="text" 
            id="phone-number" 
            placeholder="79991234567" 
            class="input" 
            :class="{'is-invalid': $v.phone.$invalid && isTrySubmit}" 
            @input="inputHandler($v.phone)" 
            v-model="phone"
          >
          <div class="valid-err" v-if="$v.phone.$invalid && isTrySubmit && !$v.phone.required">Укажите телефон</div>
          <div 
            class="valid-err" 
            v-else-if="$v.phone.$invalid && isTrySubmit && !$v.phone.phoneNumber"
          >
            Телефон должен быть указан в формате 79991234567
          </div>
        </div>
        <fieldset class="gender">
          <div class="row">
            <div class="label">Ваш пол</div>
            <div class="input unbordered">
              <input type="radio" name="gender" id="gender-male" value="male" v-model="gender">
              <label for="gender-male">М</label>
              <input type="radio" name="gender" id="gender-female" value="female" v-model="gender">
              <label for="gender-female">Ж</label>
            </div>
          </div>
        </fieldset>
        <div class="row">
          <div class="label">
            Группа клиентов
          </div>
            <select 
              class="input input-multi" 
              multiple 
              name="group" 
              id="group" 
              v-model="clientsGroup" 
              :class="{'is-invalid': $v.clientsGroup.$invalid && isTrySubmit}" 
              @input="inputHandler($v.clientsGroup)"
            >
              <option value="vip">VIP</option>
              <option value="problem">Проблемный</option>
              <option value="oms">ОМС</option>
            </select>
            <div class="valid-err" v-show="$v.clientsGroup.$invalid && isTrySubmit">Выберете группу клиентов</div>
        </div>
        <div class="row">
          <div class="label">Лечащий врач</div>
          <select class="input" name="doctor" id="doctor" v-model="doctor">
            <option value="ivanov">Иванов</option>
            <option value="zaharov">Захаров</option>
            <option value="chernyshova">Чернрышова</option>
          </select>
        </div>
        <div class="row row-single">
          <input type="checkbox" id="not-sms" v-model="notSMS">
          <label for="not-sms"><span>Не отправлять смс</span></label>
        </div>
      </fieldset>
      
      <fieldset>
        <legend>Адрес</legend>
        <div class="row">
          <label for="index" class="label">Индекс</label>
          <input 
            type="text" 
            id="index" 
            class="input" 
            :class="{'is-invalid': $v.index.$invalid && isTrySubmit}" 
            @input="inputHandler($v.index)"  
            placeholder="123456" 
            v-model="index"
          >
          <div class="valid-err" v-show="$v.index.$invalid && isTrySubmit">Индекс должен состоять только из цифр</div>
        </div>
        <div class="row">
          <label for="country" class="label">Страна</label>
          <input type="text" class="input" id="country" v-model="country">
        </div>
        <div class="row">
          <label for="region" class="label">Область</label>
          <input type="text" class="input" id="region" v-model="region">
        </div>
        <div class="row">
          <label for="citi" class="label">Город<sup class="required-mark">&#10038;</sup></label>
          <input 
            type="text" 
            id="citi" 
            class="input" 
            :class="{'is-invalid': $v.citi.$invalid && isTrySubmit}" 
            @input="inputHandler($v.citi)" 
            v-model="citi"
          >
          <div class="valid-err" v-show="$v.citi.$invalid && isTrySubmit">Введите город</div>
        </div>
        <div class="row">
          <label for="street" class="label">Улица</label>
          <input type="text" class="input" id="street" v-model="street">
        </div>
        <div class="row">
          <label for="building" class="label">Дом</label>
          <input type="text" class="input" id="building" v-model="building">
        </div>
      </fieldset>

      <fieldset>
        <legend>Паспорт</legend>
        <div class="row">
          <div class="label">Тип документа<sup class="required-mark">&#10038;</sup></div>
          <select 
            class="input" 
            name="type-doc" 
            id="type-doc" 
            :class="{'is-invalid': $v.typeDoc.$invalid && isTrySubmit}" 
            @input="inputHandler($v.typeDoc)" 
            v-model="typeDoc"
          >
            <option value="passport">Паспорт</option>
            <option value="birth-doc">Свидетельство о рождении</option>
            <option value="driver-license">Вод. удостоверение</option>
          </select>
          <div class="valid-err" v-show="$v.typeDoc.$invalid && isTrySubmit">Укажите документ</div>
        </div>
        <div class="row">
          <label for="series" class="label">Серия</label>
          <input type="text" class="input" id="series" :placeholder="seriesPlaceholder" v-model="series">
        </div>
        <div class="row">
          <label for="number" class="label">Номер</label>
          <input type="text" class="input" id="number" placeholder="123456" v-model="docNumber">
        </div>
        <div class="row">
          <label for="emission-who" class="label">Кем выдан</label>
          <input type="text" class="input" id="emission-who" v-model="emissionWho">
        </div>
        <div class="row">
          <label for="emission-date" class="label">Дата выдачи<sup class="required-mark">&#10038;</sup></label>
          <input 
            type="date" 
            id="emission-date" 
            class="input" 
            :class="{'is-invalid': $v.emissionDate.$invalid && isTrySubmit}" 
            @input="inputHandler($v.citi)" 
            v-model="emissionDate"
          >
          <div class="valid-err" v-show="$v.emissionDate.$invalid && isTrySubmit">Введите дату выдачи</div>
        </div>
      </fieldset>

      <input type="submit" :value="submitMessage">
    </form>
  </div>
</template>

<script>
import {required, numeric} from 'vuelidate/lib/validators';

export default {
  name: 'App',
  data() {
    return {
      isTrySubmit: false,
      submitMessage: 'отправить',
      surname: '',
      name: '',
      middleName: '',
      birthday: '',
      phone: '',
      gender: '',
      clientsGroup: [],
      doctor: '',
      notSMS: false,
      index: '',
      country: '',
      region: '',
      citi: '',
      street: '',
      building: '',
      typeDoc: 'passport',
      series: '',
      docNumber: '',
      emissionWho: '',
      emissionDate: '',
    }
  },
  computed: {
    seriesPlaceholder() {
      switch (this.typeDoc) {
        case 'passport':
        case 'driver-license':
          return '1234';
        case 'birth-doc':
          return 'II-БС';
        default:
          return '';
      }
    },
  },
  validations: {
    surname: {required},
    name: {required},
    birthday: {required},
    phone: {
      required,
      phoneNumber: function(phone) {
        const res = phone.search(/7\d{10}$/);
        return res === -1 ? false : true;
      }
    },
    clientsGroup: {required},
    index: {numeric},
    citi: {required},
    typeDoc: {required},
    emissionDate: {required},
  },
  methods: {
    submitHandler() {
      this.isTrySubmit = true;
      this.submitMessage = this.$v.$invalid ? 'форма заполнена некорректно' : 'новый клиент успешно создан';
      !this.$v.$invalid && this.clear();
      setTimeout(() => {
        this.submitMessage = 'отправить';
      }, 3000);
    },
    inputHandler(input) {
      input.$touch();
    },
    clear() {
      this.surname = '';
      this.name = '';
      this.middleName = '';
      this.birthday = '';
      this.phone = '';
      this.gender = '';
      this.clientsGroup = [];
      this.doctor = '';
      this.notSMS = false;
      this.index = '';
      this.country = '';
      this.region = '';
      this.citi = '';
      this.street = '';
      this.building = '';
      this.typeDoc = 'passport';
      this.series = '';
      this.docNumber = '';
      this.emissionWho = '';
      this.emissionDate = '';
      this.isTrySubmit = false;
    }
  }
}
</script>

<style lang="sass">
$accent: #b2c4d0;
$primary: #414141;
$secondary: #fff;
$attention: #6b2724;

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 15px;

  form
    width: 80%;
    max-width: 800px;
    margin: 20px auto;
    text-align: left;

    fieldset
      margin-bottom: 20px;

    legend
      display: block;
      margin-bottom: 20px;
      text-align: center;

    .row 
      position: relative;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: $primary;

      &.row-single
        justify-content: center;
        height: 30px;
        margin: 7px 0;

      .label
        flex: 1 1 250px;
        font-weight: 700;

      .input
        height: 35px;
        flex: 3 1 500px;
        border: 1px solid $accent;
        border-radius: 5px;
        padding: 0 10px;
        margin: 5px auto;
        color: $primary;
        margin: 9px 0;

        &.input-multi
          height: 53px;
          padding: 0;

          option
            padding: 0 10px;

        &.unbordered
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-evenly;

        &:focus
          outline: none;
          border: 1px solid $primary;

        &.is-invalid
          border: 2px solid $attention;

      input[type='radio'],
      input[type='checkbox']
        display: none;

        & ~ label
          display: flex;
          align-items: center;
          position: relative;
          color: $primary;
          cursor: pointer;
          line-height: 15px;

          &::before
            content: '';
            display: block;
            width: 15px;
            height: 15px;
            border: 1px solid $primary;
            border-radius: 50%;
            margin: 0 10px;

      input[type='checkbox'] ~ label::before
        border-radius: 3px;

      input[type='radio']:checked,
      input[type='checkbox']:checked
        
        & + label::before
          border-color: $accent;
          background-color: $accent;

        & + label::after
          content: '';
          display: block;
          position: absolute;
          left: 13px;
          top: calc(50% - 4px);
          width: 9px;
          height: 5px;
          border: 2px solid $secondary;
          border-top: none;
          border-right: none;
          transform: rotate(-45deg);

      .valid-err
        position: absolute;
        font-size: 10px;
        color: $attention;
        right: 5px;
        bottom: -2px;

    @media (max-width: 576px)
      .row
        flex-direction: column;
        align-items: stretch;

        .input,
        .label
          flex-basis: auto;

    .required-mark
      font-size: 8px;
      color: darkred;

    input[type='submit']
      display: block;
      width: 100%;
      border: none;
      outline: none;
      background-color: $accent;
      color: $primary;
      border-radius: 5px;
      height: 40px;
      text-transform: uppercase;
      font-weight: 700;
      cursor: pointer;

  @media (max-width: 576px)
    form
      width: 100%;

  select:not([multiple])
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'); 
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
</style>
