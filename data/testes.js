const tests = {

  /* ================= ОСТЕОЛОГИЯ ================= */

  test1: {
    title: "Позвонок",
    image: "images/image_1.png",
    items: [
      {n:1, answer:"processus spinosus"},
      {n:2, answer:"foramen vertebrale"},
      {n:3, answer:"processus articularis inferior"},
      {n:4, answer:"processus articularis superior"},
      {n:5, answer:"corpus vertebrae"},
      {n:6, answer:"processus transversus"},
      {n:7, answer:"foramen transversarium"},
      {n:8, answer:"processus costarium"}
    ]
  },

  test2: {
    title: "Os sacrum",
    image: "images/image_2.png",
    items: [
      {n:1, answer:"basis ossis sacri"},
      {n:2, answer:"processus articularis superior"},
      {n:3, answer:"foramina sacralia pelvina"},
      {n:4, answer:"linea transversae"},
      {n:5, answer:"apex ossis sacri"}
    ]
  },

  test3: {
    title: "Типы позвонков",
    image: "images/image_3.png",
    items: [
      {n:1, answer:"vertebra cervicalis"},
      {n:2, answer:"vertebra thoracica"},
      {n:3, answer:"vertebra lumbalis"},
      {n:4, answer:"vertebra sacraliia"},
      {n:5, answer:"vertebra coccygea"},
      {n:6, answer:"atlant"},
      {n:7, answer:"processus transversus"}
    ]
  },

  test4: {
    title: "Кости верхней конечности",
    image: "images/image_4.png",
    items: [
      {n:1, answer:"clavicula"},
      {n:2, answer:"scapula"},
      {n:3, answer:"humerus"},
      {n:4, answer:"radius"},
      {n:5, answer:"ulna"},
      {n:6, answer:"ossa carpi"},
      {n:7, answer:"ossa metacarpi"},
      {n:8, answer:"ossa digitorum manus"}
    ]
  },

  test5: {
    title: "Кости нижней конечности",
    image: "images/image_5.png",
    items: [
      {n:1, answer:"os sacrum"},
      {n:2, answer:"os coxae"},
      {n:3, answer:"femur"},
      {n:4, answer:"patella"},
      {n:5, answer:"fibula"},
      {n:6, answer:"tibia"},
      {n:7, answer:"ossa pedis"}
    ]
  },

  test6: {
    title: "Humerus (детально)",
    image: "images/image_6.png",
    items: [
      {n:1, answer:"tuberculum major"},
      {n:2, answer:"sulcus intertubercularis"},
      {n:3, answer:"tuberositas deltoidea"},
      {n:4, answer:"fossa radialis"},
      {n:5, answer:"capitulum humeri"},
      {n:6, answer:"trochlea humeri"},
      {n:7, answer:"fossa coronoidea"},
      {n:8, answer:"tuberculum minus"},
      {n:9, answer:"caput humeri"}
    ]
  },

  test7: {
    title: "Femur (детально)",
    image: "images/image_7.png",
    items: [
      {n:1, answer:"fovea capitis"},
      {n:2, answer:"caput femoris"},
      {n:3, answer:"trochanter major"},
      {n:4, answer:"collum femoris"},
      {n:5, answer:"linea intertrochanterica"},
      {n:6, answer:"trochanter minor"},
      {n:7, answer:"corpus femoris"},
      {n:8, answer:"epicondylus lateralis"},
      {n:9, answer:"epicondylus medialis"}
    ]
  },

  test8: {
    title: "Tibia и Fibula",
    image: "images/image_8.png",
    items: [
      {n:1, answer:"condylus lateralis"},
      {n:2, answer:"caput fibulae"},
      {n:3, answer:"margo interosseus fibulae"},
      {n:4, answer:"malleolus lateralis"},
      {n:5, answer:"malleolus medialis"},
      {n:6, answer:"corpus tibiae"},
      {n:7, answer:"tuberositas tibia"},
      {n:8, answer:"condylus medialis"}
    ]
  },

  test9: {
    title: "Os coxae",
    image: "images/image_9.png",
    items: [
      {n:1, answer:"crista iliaca"},
      {n:2, answer:"spina iliaca posterior inferior"},
      {n:3, answer:"incisura ischiadica major"},
      {n:4, answer:"spina ischiadica"},
      {n:5, answer:"tuber ischiadica"},
      {n:6, answer:"spina iliaca anterior superior"},
      {n:7, answer:"fossa acetabuli"},
      {n:8, answer:"foramen obturatum"}
    ]
  },

  /* ================= СВЯЗКИ И СУСТАВЫ ================= */

  test10: {
    title: "Грудино-ключичный сустав",
    image: "images/image_10.png",
    items: [
      {n:1, answer:"lig.interclavicularis"},
      {n:2, answer:"discus articularis"},
      {n:3, answer:"os clavicularis"},
      {n:4, answer:"lig.cllaviculare"},
      {n:5, answer:"costa"},
      {n:6, answer:"lig.sternoclaviculare anterius"},
      {n:7, answer:"sternum"}
    ]
  },

  test11: {
    title: "Связки позвоночника",
    image: "images/image_11.png",
    items: [
      {n:1, answer:"corpus vertebrae"},
      {n:2, answer:"discus intervertebralis"},
      {n:3, answer:"lig.longitudinale posterior"},
      {n:4, answer:"lig.longitudinale anterior"},
      {n:5, answer:"art.zygapophysialis"},
      {n:6, answer:"lig.interspinale"},
      {n:7, answer:"lig.flava"},
      {n:8, answer:"lig.supraspinale"},
      {n:9, answer:"foramen intervertebrale"}
    ]
  },

  test12: {
    title: "Плечевой сустав",
    image: "images/image_12.png",
    items: [
      {n:1, answer:"lig.coracohumerale"},
      {n:2, answer:"lig.coracoacromiale"},
      {n:3, answer:"processus coracoideus"},
      {n:4, answer:"scapula"},
      {n:5, answer:"capsula articularis"},
      {n:6, answer:"humerus"},
      {n:7, answer:"caput longus m.biceps brachii"},
      {n:8, answer:"m.subscapularis"},
      {n:9, answer:"acromion"}
    ]
  },

  test13: {
    title: "Тазобедренный сустав",
    image: "images/image_13.png",
    items: [
      {n:1, answer:"spina iliaca anterior inferior"},
      {n:2, answer:"lig.iliofemorale"},
      {n:3, answer:"capsula articularis"},
      {n:4, answer:"lig.pubofemorale"},
      {n:5, answer:"canalis obturatorius"},
      {n:6, answer:"membrana obturatoria"},
      {n:7, answer:"trochanter minor"},
      {n:8, answer:"femor"},
      {n:9, answer:"trochanter major"}
    ]
  },

  test14: {
    title: "Коленный сустав",
    image: "images/image_14.png",
    items: [
      {n:1, answer:"femur"},
      {n:2, answer:"lig.cruciformis posterior"},
      {n:3, answer:"lig.cruciformis anterior"},
      {n:4, answer:"meniscus medialis"},
      {n:5, answer:"meniscus lateralis"},
      {n:6, answer:"lig.collaterale tibia"},
      {n:7, answer:"lig.suprapatellaris"},
      {n:8, answer:"patella"},
      {n:9, answer:"caput fibulae"},
      {n:10, answer:"membrana interossea"}
    ]
  },

  /* ================= МЫШЦЫ ================= */

  test15: {
    title: "Мышцы туловища",
    image: "images/image_15.png",
    items: [
      {n:1, answer:"m.pectoralis major"},
      {n:2, answer:"m.pectoralis major"},
      {n:3, answer:"m.trapecius"},
      {n:4, answer:"m.sternocleidomastoideus"},
      {n:5, answer:"fascia thoracica"},
      {n:7, answer:"m.deltoideus"},
      {n:8, answer:"m.obliquus abdominis internus"},
      {n:9, answer:"m.serratus anterior"},
      {n:10, answer:"m.rectus abdominis"},
      {n:11, answer:"m.transversus abdominis"}
    ]
  },

  test16: {
    title: "Мышцы спины",
    image: "images/image_16.png",
    items: [
      {n:1, answer:"m.trapecius"},
      {n:2, answer:"spina scapulae"},
      {n:3, answer:"m.deltoideus"},
      {n:4, answer:"m.infraspinatus"},
      {n:5, answer:"m.teres minor"},
      {n:6, answer:"m.teres major"},
      {n:7, answer:"m.rhomboideus major"},
      {n:8, answer:"m.latissimus dorsi"},
      {n:9, answer:"trigonum lumborum"}
    ]
  },

  test17: {
    title: "Мышцы бедра (задняя группа)",
    image: "images/image_17.png",
    items: [
      {n:1, answer:"m.gluteus maximus"},
      {n:2, answer:"m.adductor magnus"},
      {n:3, answer:"tractus iliotibialis"},
      {n:4, answer:"tendo m.semitendinosus"},
      {n:5, answer:"m.semitendinosus"},
      {n:6, answer:"m.biceps femoris"},
      {n:7, answer:"m.gracilis"},
      {n:8, answer:"m.semimembranosus"},
      {n:9, answer:"m.sartorius"},
      {n:10, answer:"m.popliteus"}
    ]
  },

  test18: {
    title: "Мышцы бедра (передняя и медиальная)",
    image: "images/image_18.png",
    items: [
      {n:1, answer:"m.sartorius"},
      {n:2, answer:"m.iliopsoas"},
      {n:3, answer:"m.pectineus"},
      {n:4, answer:"m.adductor longus"},
      {n:5, answer:"m.gracilis"},
      {n:6, answer:"m.gastrocnemius"},
      {n:7, answer:"m.soleus"},
      {n:8, answer:"m.extensoris hallucis longus"}
    ]
  },

  test19: {
    title: "Мышцы плеча и предплечья",
    image: "images/image_19.png",
    items: [
      {n:1, answer:"m.levator scapulae"},
      {n:2, answer:"m.deltoideus"},
      {n:3, answer:"m.biceps brachi"},
      {n:4, answer:"m.coracobrachialis"},
      {n:5, answer:"m.subscapularis"},
      {n:6, answer:"m.rhomboideus major"},
      {n:7, answer:"m.brachioradialis"},
      {n:8, answer:"m.triceps brachi"}
    ]
  }

};
