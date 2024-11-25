import React from 'react';
import axios from 'axios';

import Navbar from "./Navbar"
import Img1 from "../assets/img/DSC05461-2.jpg"
import Img2 from "../assets/img/DSC00070-r.jpg"


class HomePage extends React.Component {
  state = {
    calc: {
      rate: 320,
      hours: 4,
      days: 1,
      sum: 1280
    }, 
    form: {
      fields: {
        name: '',
        city: 'Санкт-Петербург',
        phone_number: '',
        sex: 'Мужской',
        age: 18,
        transport: 'Велосипед',
        confidentiality: false
      },
      errors: [
        {attribute: 'confidentiality', value: 'Необходимо принять политику конфиденциальности для отправки'},
        {attribute: 'name', value: 'Необходимо ввести ФИО'},
        {attribute: 'phone_number', value: 'Необходимо ввести номер телефона'}
      ]
    }
  }

  calcChangeCity(rate_string) {
      const newState = {...this.state,
        calc: {
          rate: Number(rate_string),
          hours: this.state.calc.hours,
          days: this.state.calc.days,
          sum: Number(rate_string) *  this.state.calc.hours * this.state.calc.days
        }
      };
      this.setState(newState);
  }

  calcChangeHours(hours_string) {
    const newState = {...this.state,
      calc: {
        hours: Number(hours_string),
        rate: this.state.calc.rate,
        days: this.state.calc.days,
        sum: Number(hours_string) *  this.state.calc.rate * this.state.calc.days
      }
    };
    this.setState(newState);
  }

  calcChangeDays(days_string) {
    const newState = {...this.state,
      calc: {
        days: Number(days_string),
        rate: this.state.calc.rate,
        hours: this.state.calc.hours,
        sum: Number(days_string) *  this.state.calc.rate * this.state.calc.hours
      }
    };
    this.setState(newState);
  }

  validateFormFields(fields) {
    const errors = [];

    // validate name
    if (!fields.name.length)
      errors.push({attribute: 'name', value: 'Необходимо ввести ФИО'})
    // validate phone
    if (!fields.phone_number.length)
      errors.push({attribute: 'phone_number', value: 'Необходимо ввести номер телефона'})
    // validate confidentiality
    if (!fields.confidentiality)
      errors.push({attribute: 'confidentiality', value: 'Необходимо принять политику конфиденциальности для отправки'})
    // validate age
    if (!fields.age)
      errors.push({attribute: 'age', value: 'Необходимо ввести возраст'})
    if (fields.age && Number(fields.age) < 18)
      errors.push({attribute: 'age', value: 'Вам должно быть 18 лет или больше для сотрудничества'})
    console.log(fields.age)
    return errors;
  }

  formOnSubmit(event) {
    event.preventDefault();
    const form_fields_without_confidentiality = {...this.state.form.fields}
    delete form_fields_without_confidentiality.confidentiality
    axios.post('https://samokat.amg.net.ru:4443/send-email', form_fields_without_confidentiality);
  }

  formOnChangeName(name) {
    const newFields = {
      ...this.state.form.fields,
      name: name,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  formOnChangeCity(city) {
    const newFields = {
      ...this.state.form.fields,
      city: city,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  formOnChangePhone(phone_number) {
    const newFields = {
      ...this.state.form.fields,
      phone_number: phone_number,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  formOnChangeSex(sex) {
    const newFields = {
      ...this.state.form.fields,
      sex: sex,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  formOnChangeAge(age) {
    const newFields = {
      ...this.state.form.fields,
      age: age,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  formOnChangeTransport(transport) {
    const newFields = {
      ...this.state.form.fields,
      transport: transport,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  formOnChangeConfidentiality(confidentiality) {
    const newFields = {
      ...this.state.form.fields,
      confidentiality: confidentiality,
    };
    const newState = {...this.state,
      form: {
        fields: newFields,
        errors: this.validateFormFields(newFields)
      }
    };
    this.setState(newState);
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card">
              <div className="row">
                <div className="col-md-6 flex-center p-3"><h1 className="text-center">Доход до 5300₽ в день</h1></div>
                <div className="col-md-6"><img className="img-fluid" src={Img1} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="advantages" className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card p-3">
              <h1 className="text-center">Наши преимущества</h1>
              <div className="row justify-content-center">
                <div className="card col-md-3 mb-3"><h4>Приведи друга, получи награду до 25000₽</h4></div>
                <div className="card col-md-3 mb-3"><h4>Нет штрафов</h4></div>
                <div className="card col-md-3 mb-3"><h4>Зона ожидания внутри даркстора</h4></div>
                <div className="card col-md-3 mb-3"><h4>Страховка на время доставок</h4></div>
              </div>
              <div className="row justify-content-center">
                <div className="card col-md-3 mb-3"><h4>Возможность выбрать адрес для работы</h4></div>
                <div className="card col-md-3 mb-3"><h4>Удобный режим от четырех часов в день</h4></div>
                <div className="card col-md-3 mb-3"><h4>Почасовая оплата</h4></div>
                <div className="card col-md-3 mb-3"><h4>Велосипед предоставляем</h4></div>
              </div>
              <h3>А еще доплата при сложных погодных условиях, чаевые, бонусы за приведённых друзей и надбавки за доставку в выходные дни</h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card invite-a-friend">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-content-center flex-wrap invite-a-friend__text">
                    <h1>Пригласи друга доставлять или собирать заказы</h1>
                    <h3>Получи награду до 25000₽</h3>
                  </div>
                </div>
                <div className="col-md-6"><img className="img-fluid" src={Img2} alt="" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card p-2">
            <h1 className="text-center">Как стать курьером-партнером?</h1>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="employment-process">
                  <div className="employment-process__item">
                    <div>
                      <div className="employment-process__number">1</div>
                      <a href="#application-form" className="btn btn-lg btn-primary employment-process__btn">Оставить заявку</a>
                    </div>
                    <div>
                      <span>Чтобы стать курьером-партнёром, нужно оставить заявку на этом сайте</span>
                    </div>
                  </div>
                  <div className="employment-process__item">
                    <div>
                      <div className="employment-process__number">2</div>
                      <span className="employment-process__heading">Принять звонок</span>
                    </div>
                    <div>
                      <span>Мы позвоним и расскажем об условиях партнёрства</span>
                    </div>
                  </div>
                  <div className="employment-process__item">
                    <div>
                      <div className="employment-process__number">3</div>
                      <span className="employment-process__heading">Выбрать даркстор</span>
                    </div>
                    <div>
                      <span>Выбрать подходящий в зависимости от своей локации</span>
                    </div>
                  </div>
                  <div className="employment-process__item">
                    <div>
                      <div className="employment-process__number">4</div>
                      <span className="employment-process__heading">Изучить правила</span>
                    </div>
                    <div>
                      <span>Узнать, как всё устроено, и приступить к сотрудничеству</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>


        <div id="application-form" className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card">
              <div className="row justify-content-center p-3">
                <div className="col-md-8">
                  <h1>Заполни анкету, чтобы стать курьером-партнёром</h1>
                  <form className="row g-3" onSubmit={e => this.formOnSubmit(e)}>
                    <div className="col-12">
                      <label htmlFor="inputName" className="form-label">Фамилия, имя, отчество</label>
                      <input name="name" type="text" className={"form-control " + (this.state.form.errors.filter(item => item.attribute == 'name').length ? "is-invalid" : "is-valid") }
                       id="inputName" onChange={(e) => this.formOnChangeName(e.target.value)} value={this.state.form.fields.name}/>
                      <div class="invalid-feedback">
                        {this.state.form.errors.filter(item => item.attribute == 'name').map((item, key) => (
                          <div key={key}>{item.value}</div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">Ваш город</label>
                      <select name="city" id="inputCity" className={"form-select " + (this.state.form.errors.filter(item => item.attribute == 'city').length ? "is-invalid" : "is-valid") }
                       onChange={(e) => this.formOnChangeCity(e.target.value)} value={this.state.form.fields.city}>
                        <option value="Санкт-Петербург" selected>Санкт-Петербург</option>
                        <option value="Всеволожск">Всеволожск</option>
                        <option value="Великий Новгород">Великий Новгород</option>
                        <option value="Петрозаводск">Петрозаводск</option>
                        <option value="Казань">Казань</option>
                        <option value="Набережные Челны">Набережные Челны</option>
                        <option value="Екатеринбург">Екатеринбург</option>
                        <option value="Новосибирск">Новосибирск</option>
                        <option value="Псков">Псков</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPhone" className="form-label">Номер телефона</label>
                      <input type="text" className={"form-control " + (this.state.form.errors.filter(item => item.attribute == 'phone_number').length ? "is-invalid" : "is-valid") }
                       id="inputPhone" onChange={(e) => this.formOnChangePhone(e.target.value)} value={this.state.form.fields.phone_number}/>
                       <div class="invalid-feedback">
                         {this.state.form.errors.filter(item => item.attribute == 'phone_number').map((item, key) => (
                           <div key={key}>{item.value}</div>
                         ))}
                       </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputSex" className="form-label">Пол</label>
                      <select name="sex" id="inputSex" className={"form-control " + (this.state.form.errors.filter(item => item.attribute == 'sex').length ? "is-invalid" : "is-valid") }
                      onChange={(e) => this.formOnChangeSex(e.target.value)} value={this.state.form.fields.sex}>
                        <option value="Мужской" selected>Мужской</option>
                        <option value="Женский">Женский</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputAge" className="form-label">Возраст</label>
                      <input name="age" type="number" className={"form-control " + (this.state.form.errors.filter(item => item.attribute == 'age').length ? "is-invalid" : "is-valid") }
                       id="inputAge" onChange={(e) => this.formOnChangeAge(e.target.value)} value={this.state.form.fields.age}/>
                       <div class="invalid-feedback">
                         {this.state.form.errors.filter(item => item.attribute == 'age').map((item, key) => (
                           <div key={key}>{item.value}</div>
                         ))}
                       </div>
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="inputTransport" className="form-label">Тип транспорта</label>
                      <select name="transport" id="inputTransport"  className={"form-select " + (this.state.form.errors.filter(item => item.attribute == 'transport').length ? "is-invalid" : "is-valid") } 
                      onChange={(e) => this.formOnChangeTransport(e.target.value)} value={this.state.form.fields.transport}>
                        <option value="Велосипед" selected>Велосипед</option>
                        <option value="Электробайк">Электробайк</option>
                        <option value="Мотоцикл">Мотоцикл</option>
                        <option value="Автомобиль">Автомобиль</option>
                        <option value="Пеший">Пеший</option>
                      </select>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-check">
                        <input name="confidentiality" className={"form-check-input " + (this.state.form.errors.filter(item => item.attribute == 'confidentiality').length ? "is-invalid" : "is-valid") }
                         type="checkbox" id="confidentialityCheck" onChange={(e) => this.formOnChangeConfidentiality(e.target.checked)} value={this.state.form.fields.confidentiality}/>
                        <label className="form-check-label" htmlFor="confidentialityCheck">
                          Вы даете согласие на обработку своих персональных данных в соответствии с <a href="/privacy">политикой конфиденциальности</a>
                          </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={ this.state.form.errors.length ? true : false} type="submit" className="btn btn-lg btn-primary">Оставить заявку</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                  <h1>Спасибо за Ваш выбор! Наш сотрудник свяжется с Вами в ближайшее время.</h1>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="calc" className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card invite-a-friend">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-content-center flex-wrap invite-a-friend__text">
                    <h1>Воспользуйтесь калькулятором дохода</h1>
                    <h3>Курьеры-партнёры получают выплаты за часы и количество заказов. Итоговая сумма зависит от города и уровня загрузки</h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-content-center flex-wrap invite-a-friend__calc">

                    <label htmlFor="inputCityCalc" className="form-label">Ваш город</label>
                    <select name="city" id="inputCityCalc" className="form-select" onChange={(e) => this.calcChangeCity(e.target.value)}>
                      <option value="320" selected>Санкт-Петербург</option>
                      <option value="320">Всеволожск</option>
                      <option value="270">Великий Новгород</option>
                      <option value="270">Петрозаводск</option>
                      <option value="320">Казань</option>
                      <option value="285">Набережные Челны</option>
                      <option value="310">Екатеринбург</option>
                      <option value="290">Новосибирск</option>
                      <option value="270">Псков</option>
                    </select>

                    <label htmlFor="customRange1" class="form-label">Выберите, сколько часов в день вам удобно уделять доставке. Выбрано: {this.state.calc.hours}.</label>
                    <input type="range" class="form-range" min="4" max="16" step="1" id="customRange1" onChange={(e) => this.calcChangeHours(e.target.value)} value={this.state.calc.hours}/>

                    <label htmlFor="customRange2" class="form-label">Выберите, сколько дней в месяц вам хотелось бы сотрудничать. Выбрано: {this.state.calc.days}.</label>
                    <input type="range" class="form-range" min="1" max="31" step="1" id="customRange2" onChange={(e) => this.calcChangeDays(e.target.value)} value={this.state.calc.days}/>

                    <div><h1>Ваш доход:<br/>{this.state.calc.sum}₽</h1><p>(ориентировочная сумма)</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card invite-a-friend">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-content-center flex-wrap invite-a-friend__text">
                    <h1>Часто задаваемые вопросы</h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Как формируется ставка за час работы?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Например СПБ стоимость за час работы на вело 215р+75р(доставка трех заказов за час) + 15р(бонус от компании партнера при работе более 50 часов в неделю) + 30р бонус за доставку арбузов (сезонный бонус) + 30р/час за погодные условия (дождь, снег, жара)+ бонус работы в вечерние часы (по соглавованию) + бонус за работу в выходные дни (по согласованию).
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Можно  устроится на работу если мне нет 18 лет?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          По правилам партнера мы не можем Вас взять на работу если Вам нет 18 лет.  Мы будем Вас ждать когда исполнится 18 лет.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Как часто выплачивается денежное вознаграждение?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Выплаты  проходят раз в неделю
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Для работы какой нужен телефон?
                        </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Смартфон с операционной системой Android или iOS.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                          Берете на работу девушек?
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Девушек на работу принимаем.  Нужно быть физически крепким человеком, так как заказ может весить  1кг - 2кг так и  20кг - 25 кг.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseFour">
                          Можно работать без патента (граждане СНГ)? 
                        </button>
                      </h2>
                      <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Нет, для работы  курьером сотрудник должен иметь при себе действующий патент.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseFour">
                          Можно работать без регистрации (градане СНГ)?
                        </button>
                      </h2>
                      <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Нет, для работы  курьером (сборщиком заказов) сотрудник должен иметь действующую регистрацию.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseFour">
                          У меня нет Личной Медицинской Книжки, что делать?
                        </button>
                      </h2>
                      <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                         После прохождения стажировки мы вас направим для похождения необходимых врачей и сдачи необходимых анализов. Все затраты компания ООО "АМГ" возьмет на себя.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseFour">
                          У меня нет велосипеда, я могу доставлять заказы пешком?
                        </button>
                      </h2>
                      <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          Да можете. Есть тарификация для пешего курьера.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="white-card p-2">
              <h1 className="text-center">Контакты</h1>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <p>Телефоны: +79214206288, +79214202963</p>
                  <p>Email: info@amg.net.ru</p>
                  <p>Адрес: Санкт-Петербург, ул. Елизаветинская, д. 17</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HomePage;
