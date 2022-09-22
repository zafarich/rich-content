const icons: { [key: string]: string } = {
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ra-f3"><path fill="currentColor" d="M5.415 11H21a1 1 0 1 1 0 2H5.413l6.294 6.293a1 1 0 1 1-1.414 1.414l-8-7.999a1 1 0 0 1 0-1.414l8-8.001a1 1 0 1 1 1.414 1.414L5.415 11Z"></path></svg>`,
  trash_bin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ui-f0"><path fill="currentColor" d="M8.995 4.002a1 1 0 0 0-1 1v1h5a1 1 0 1 1 0 2h-7v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11h-1a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1h-6Zm11 4v11a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-11h-1a1 1 0 0 1 0-2h3v-1a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h3a1 1 0 1 1 0 2h-1Zm-10 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm4 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"></path></svg>`,
  texnomart_logo: `<svg width="230" height="38" viewBox="0 0 230 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_9003)">
<path d="M3.41814 31.6945V22.2105H0.913269V17.3248H3.41814V12.2476H9.32963V17.3248H14.2392V22.2105H9.32963V30.7366C9.32963 32.0777 9.93079 32.6525 11.2333 32.6525C12.3355 32.6525 13.3374 32.3651 14.139 31.9819V36.5802C12.9366 37.2508 11.4337 37.7298 9.42982 37.7298C5.82281 37.7298 3.41814 36.3886 3.41814 31.6945Z" fill="black"/>
<path d="M17.0435 27.3836C17.0435 21.6357 21.3519 16.9417 27.3636 16.9417C34.3772 16.9417 37.5834 22.1147 37.5834 27.8626C37.5834 28.3416 37.5834 28.8206 37.4832 29.3954H22.955C23.5562 31.9819 25.4599 33.3231 28.0649 33.3231C30.0688 33.3231 31.4716 32.7483 33.1749 31.3113L36.5815 34.1853C34.5776 36.4844 31.7721 37.9214 28.0649 37.9214C21.6525 37.8256 17.0435 33.6105 17.0435 27.3836ZM31.7721 25.8509C31.3714 23.2643 29.8684 21.6357 27.3636 21.6357C24.8587 21.6357 23.2556 23.3601 22.8548 25.8509H31.7721Z" fill="black"/>
<path d="M46.401 27.1919L39.2872 17.3247H45.6996L49.6072 23.1684L53.5148 17.3247H59.7269L52.6131 27.0961L60.0275 37.3465H53.615L49.4068 31.1196L45.1987 37.3465H38.9866L46.401 27.1919Z" fill="black"/>
<path d="M63.6342 17.3248H69.5457V20.1988C70.9484 18.4744 72.6517 16.9417 75.6576 16.9417C80.1664 16.9417 82.7714 19.8156 82.7714 24.4139V37.3466H76.8599V26.2341C76.8599 23.5517 75.5574 22.1147 73.2529 22.1147C70.9484 22.1147 69.5457 23.4559 69.5457 26.2341V37.4424H63.6342V17.3248Z" fill="black"/>
<path d="M86.9806 27.3836C86.9806 21.6357 91.7899 16.9417 98.4028 16.9417C104.915 16.9417 109.725 21.54 109.725 27.3836C109.725 33.1315 104.915 37.8256 98.3026 37.8256C91.7899 37.8256 86.9806 33.2273 86.9806 27.3836ZM103.813 27.3836C103.813 24.4139 101.609 21.8273 98.3026 21.8273C94.896 21.8273 92.8921 24.3181 92.8921 27.3836C92.8921 30.3534 95.0964 32.9399 98.4028 32.9399C101.809 32.9399 103.813 30.4492 103.813 27.3836Z" fill="black"/>
<path d="M113.932 17.3248H119.843V20.1988C121.246 18.4744 123.05 16.9417 126.055 16.9417C128.761 16.9417 130.865 18.0912 131.967 20.103C133.77 18.0912 135.975 16.9417 138.88 16.9417C143.289 16.9417 145.994 19.5282 145.994 24.3181V37.3466H140.083V26.2341C140.083 23.5517 138.88 22.1147 136.576 22.1147C134.372 22.1147 132.969 23.4559 132.969 26.2341V37.4424H127.057V26.2341C127.057 23.5517 125.855 22.1147 123.551 22.1147C121.346 22.1147 119.944 23.4559 119.944 26.2341V37.4424H114.032V17.3248H113.932Z" fill="black"/>
<path d="M149.802 31.5988C149.802 27.1921 153.309 25.1803 158.219 25.1803C160.323 25.1803 161.826 25.5635 163.329 26.0425V25.6593C163.329 23.2644 161.826 22.019 158.82 22.019C156.516 22.019 154.912 22.4022 153.009 23.0728L151.506 18.7619C153.81 17.8039 156.115 17.1333 159.622 17.1333C162.828 17.1333 165.232 17.9955 166.735 19.3367C168.339 20.8694 169.04 23.0728 169.04 25.7551V37.3467H163.329V35.1433C161.926 36.6761 159.922 37.7299 157.017 37.7299C153.109 37.7299 149.802 35.6223 149.802 31.5988ZM163.529 30.3534V29.2996C162.527 28.8206 161.225 28.5333 159.722 28.5333C157.217 28.5333 155.614 29.4912 155.614 31.4072C155.614 32.94 156.916 33.8021 158.82 33.8021C161.625 33.8021 163.529 32.3652 163.529 30.3534Z" fill="black"/>
<path d="M174.25 17.3247H180.161V21.3482C181.364 18.5701 183.367 16.7499 186.874 16.9415V22.881H186.574C182.666 22.881 180.161 25.1802 180.161 29.9701V37.3465H174.25V17.3247Z" fill="black"/>
<path d="M191.583 31.6945V22.2105H189.078V17.3248H191.583V12.2476H197.494V17.3248H202.404V22.2105H197.494V30.7366C197.494 32.0777 198.095 32.6525 199.398 32.6525C200.5 32.6525 201.502 32.3651 202.303 31.9819V36.5802C201.101 37.2508 199.598 37.7298 197.594 37.7298C193.987 37.7298 191.583 36.3886 191.583 31.6945Z" fill="black"/>
<path d="M229.557 15.6007L226.551 20.4864L220.539 17.1335V23.8394H214.528V17.1335L208.516 20.4864L205.51 15.6007L211.622 12.2478L205.61 8.89487L208.516 4.00918L214.528 7.36211V0.65625H220.539V7.36211L226.551 4.00918L229.457 8.89487L223.445 12.2478L229.557 15.6007Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_7_9003">
<rect width="230" height="38" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  alert: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3319 6.63841L12.3461 6.65386L12.3616 6.66807C12.4026 6.70581 12.4346 6.75233 12.4552 6.80417L12.455 6.80423L12.46 6.81604C12.4847 6.87384 12.4982 6.93575 12.4999 6.99851C12.4977 7.06826 12.4831 7.13708 12.4568 7.20177L12.4568 7.20176L12.4552 7.20583C12.4346 7.25767 12.4026 7.30419 12.3616 7.34193L12.3516 7.35111L12.3421 7.36082C12.2983 7.40578 12.2463 7.44206 12.1891 7.46777C12.1307 7.48985 12.0686 7.5008 12.0061 7.50004L11.9976 7.49993L11.9891 7.50012C11.926 7.5015 11.8632 7.49091 11.8041 7.46895C11.685 7.41293 11.589 7.31744 11.5324 7.19877C11.5104 7.13636 11.4994 7.07056 11.5 7.00432L11.5001 7.00432L11.5 6.99387C11.4992 6.9314 11.5102 6.86935 11.5322 6.81095C11.5579 6.75368 11.5942 6.70175 11.6392 6.65787L11.6489 6.6484L11.6581 6.63841C11.6958 6.59737 11.7423 6.56538 11.7942 6.54485L11.7942 6.54492L11.8025 6.54146C11.8635 6.51602 11.9289 6.50292 11.995 6.50292C12.0611 6.50292 12.1265 6.51602 12.1875 6.54146L12.1875 6.54153L12.1958 6.54485C12.2477 6.56538 12.2942 6.59737 12.3319 6.63841ZM6.72209 4.10104C8.28435 3.05717 10.1211 2.5 12 2.5C13.2476 2.5 14.4829 2.74572 15.6355 3.22314C16.7881 3.70056 17.8354 4.40033 18.7175 5.28249C19.5997 6.16464 20.2994 7.21191 20.7769 8.36451C21.2543 9.5171 21.5 10.7524 21.5 12C21.5 13.8789 20.9428 15.7156 19.899 17.2779C18.8551 18.8402 17.3714 20.0578 15.6355 20.7769C13.8996 21.4959 11.9895 21.684 10.1466 21.3175C8.30383 20.9509 6.61109 20.0461 5.28249 18.7175C3.95389 17.3889 3.0491 15.6962 2.68254 13.8534C2.31598 12.0105 2.50412 10.1004 3.22315 8.36451C3.94218 6.62861 5.15982 5.14491 6.72209 4.10104ZM7.27766 19.0675C8.67548 20.0015 10.3189 20.5 12 20.5C14.2543 20.5 16.4164 19.6045 18.0104 18.0104C19.6045 16.4163 20.5 14.2543 20.5 12C20.5 10.3189 20.0015 8.67547 19.0675 7.27765C18.1335 5.87984 16.806 4.79037 15.2528 4.14702C13.6996 3.50368 11.9906 3.33535 10.3417 3.66333C8.6929 3.9913 7.17834 4.80085 5.9896 5.98959C4.80085 7.17834 3.9913 8.69289 3.66333 10.3417C3.33536 11.9906 3.50368 13.6996 4.14703 15.2528C4.79037 16.806 5.87984 18.1335 7.27766 19.0675ZM11.6465 10.6464C11.7402 10.5527 11.8674 10.5 12 10.5C12.1326 10.5 12.2598 10.5527 12.3536 10.6464C12.4473 10.7402 12.5 10.8674 12.5 11V17C12.5 17.1326 12.4473 17.2598 12.3536 17.3536C12.2598 17.4473 12.1326 17.5 12 17.5C11.8674 17.5 11.7402 17.4473 11.6465 17.3536C11.5527 17.2598 11.5 17.1326 11.5 17V11C11.5 10.8674 11.5527 10.7402 11.6465 10.6464Z" stroke="#16C67A"/>
</svg>
`
};

export default icons;
