
export default async function TalantExPage() {
  
    const elArr = [
        {
            name: "Чистота Разума",
            descr: "(Больший Выбор Образов)"
        },
        {
            name: "Перевоплощение",
            descr: "(Превращаться в носител образа)"
        },{
            name: "Замедленный выдох",
            descr: "(Увелививает время действия заклинаний)"
        },
        ,{
            name: "Образы в элементы",
            descr: "(Трансформировать образы в ману)"
        },,{
            name: "Элементы в Образы",
            descr: "(Жертвовать ману для усиления заклинаний)"
        },,{
            name: "Локализация",
            descr: "(Изменения ланшафта, местности, телепортация)"
        },,{
            name: "Легкомысленная небрежность",
            descr: "(Очистить Ум (сбросить образы) и пользоваться усиленными случайными заклинаниями)"
        },,{
            name: "Соединение образов",
            descr: "(Усиление образа заклинания другим образом)"
        },,{
            name: "Призыватель",
            descr: "(Увелививает время действия призывов и количество и силу призываемых существ)"
        },,{
            name: "Мастер Артефактов",
            descr: "(Увелививает время действия призыва Артефактов их количество и качество)"
        },,{
            name: "Сила Воли",
            descr: "(Количество элементов которые способен удерживать персонаж)"
        },,{
            name: "Разрушение",
            descr: "(Сила прямых боевых заклинаний)"
        },
        {
            name: "Скорость заклинаний",
            descr: "(Повышенная инициатива, скорость вдохов)"
        },
        {
            name: "Повелитель (укажите тип существ)",
            descr: "(Время призыва сущест данного вида и вся связанная с ними магия усиленна)"
        },
    ];


  return (
    <div className="">
      <div className="flex flex-col items-center justify-between">
              <div className="space-y-2">
                  <div className=" mb-16">
                  { 
                    elArr.map((el, indx) => ( 
                      <div className="flex mt-3 items-center justify-between" key={indx}> 
                        <div className="flex flex-col w-full items-center justify-between">
                          <div className=" text-lg font-semibold text-primary">{el?.name} </div>
                          <div className=" max-w-[360px] text-center text-[10px]">{el?.descr} </div>
                        </div> 
                      </div> 
                    ))
                  }
                  </div>
                </div>
              </div>
      </div>
  );
}
