

// Type Toggler
const toggleBtn = document.querySelector('.sidebar-fill__toggle');
const toggleTalent = document.querySelector('.sidebar-fill__talent');
const toggleCustomer = document.querySelector('.sidebar-fill__customer');

if (toggleBtn) {
	toggleBtn.addEventListener('click', () => {
		toggleBtn.classList.toggle('active');
		if (toggleBtn.classList.contains('active')) {
			toggleTalent.classList.remove('active');
			toggleCustomer.classList.add('active');
		} else {
			toggleTalent.classList.add('active');
			toggleCustomer.classList.remove('active');
		}
	});
}
// Type Toggler

// Show Details
const showBtn = document.querySelector('.sidebar-fill__btn');
const showBtnText = document.querySelector('.sidebar-fill__btn span');
const showContent = document.querySelector('.sidebar-fill__content');

if (showBtn) {
	showBtn.addEventListener('click', () => {
		showContent.classList.toggle('active');
		showBtn.classList.toggle('active');

		if (showBtn.classList.contains('active')) {
			showBtnText.innerHTML = `Hide Details`;
		} else {
			showBtnText.innerHTML = `Show Details`;
		}
	});
}
// Show Details

// EditProfileContent
const editBtn = document.querySelectorAll('.edit__btn');
const editContent = document.querySelectorAll('.edit__content_child')
const edit = document.querySelector('.edit')

if (edit) {
	for (const btn of editBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of editBtn) {
				btn2.classList.remove('active');
			}
			btn.classList.add('active');

			for (const content of editContent) {
				if (content.getAttribute('data-index') == btn.getAttribute('data-index')) {
					content.classList.add('active');
				} else {
					content.classList.remove('active');
				}
			}
		});
	}
}
// EditProfileContent

// AvatarsHeight
const editAvatar = document.querySelectorAll('.edit-avatar__ava');
const editAvatarClose = document.querySelectorAll('.edit-avatar__close');
const avatar = document.querySelector('.edit-avatar');

if (avatar) {
	for (const ava of editAvatarClose) {
		ava.style.height = `${ava.clientWidth}px`;
	}

	for (const ava of editAvatar) {
		ava.style.height = `${ava.clientWidth}px`;
	}
}
// AvatarsHeight

// UnlockPopup

const popupsBg = document.querySelectorAll('.popup__bg')
for (const bg of popupsBg) {
	bg.addEventListener('click', () => {
		const pop = bg.parentElement;
		pop.classList.toggle('active');
	});
}


const popupUnlock = document.querySelector('.popup-unlock');
const popupUnlockBtn = document.querySelector('.popup-unlock__btn');

const popupAvatar = document.querySelector('.popup-avatar');
const popupAvatarBtn = document.querySelector('.popup-avatar__btn');
if (popupAvatar) {
	popupAvatarBtn.addEventListener('click', () => {
		popupAvatar.classList.remove('active')
	});
}
// UnlockPopup

// Change Avatar
const yourPhoto = document.querySelector('.sidebar__img img');
const avaEdit = document.querySelectorAll('.edit-avatar__ava');

if (yourPhoto) {
	for (const ava of avaEdit) {
		if (!ava.classList.contains('locked')) {
			ava.addEventListener('click', () => {
				for (const ava2 of avaEdit) {
					ava2.classList.remove('active');
				}
				ava.classList.add('active');
				yourPhoto.setAttribute('src', ava.querySelector('img').getAttribute('src'));
			});
		} else {
			ava.addEventListener('click', () => {
				popupUnlock.classList.add('active');
				popupUnlockBtn.addEventListener('click', () => {
					popupUnlock.classList.remove('active');
					ava.classList.remove('locked');
					ava.classList.add('open');
					popupAvatar.classList.add('active')

					ava.addEventListener('click', () => {
						popupUnlock.classList.remove('active');
						for (const ava2 of avaEdit) {
							ava2.classList.remove('active');
						}
						ava.classList.add('active');
						yourPhoto.setAttribute('src', ava.querySelector('img:last-child').getAttribute('src'));
					});
				});
			})
		}
	}
}
// Change Avatar

// CollectionCheck
const collCheck = document.querySelectorAll('.edit-avatar-coll__check');
const collBtn = document.querySelector('.edit-avatar-coll__btn');
const collDrop = document.querySelector('.edit-avatar-coll__drop');


if (collBtn) {
	for (const btn of collCheck) {
		btn.addEventListener('click', () => {
			btn.classList.toggle('active')
		})
	}
}
if (collBtn) {
	collBtn.addEventListener('click', () => {
		collDrop.classList.toggle('active');
		collBtn.classList.toggle('active');
	})
}
// CollectionCheck

// SidebarFill
const sidebarAdd = document.querySelectorAll('.sidebar-fill__add');

if (avatar) {
	for (const btn of sidebarAdd) {
		if (btn.getAttribute('portfolio') != 'portfolio') {
			btn.addEventListener('click', () => {
				for (const content of editContent) {
					if (content.getAttribute('data-index') == 2) {
						content.classList.add('active')
					} else {
						content.classList.remove('active')
					}
				}

				for (const btn of editBtn) {
					if (btn.getAttribute('data-index') == 2) {
						btn.classList.add('active');
					} else {
						btn.classList.remove('active');
					}
				}
			});
		} else {
			btn.addEventListener('click', () => {
				for (const content of editContent) {
					if (content.getAttribute('data-index') == 3) {
						content.classList.add('active')
					} else {
						content.classList.remove('active')
					}
				}

				for (const btn of editBtn) {
					if (btn.getAttribute('data-index') == 3) {
						btn.classList.add('active');
					} else {
						btn.classList.remove('active');
					}
				}
			});
		}
	}
}
// SidebarFill

// MenuMobile
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuBg = document.querySelector('.menu__bg');
const body = document.body;

if (burger) {
	burger.addEventListener('click', () => {
		menu.classList.toggle('active')
		body.classList.toggle('scroll-lock')
		menuBg.classList.toggle('active')
	});

	menuBg.addEventListener('click', () => {
		menu.classList.toggle('active')
		body.classList.toggle('scroll-lock')
		menuBg.classList.toggle('active')
	});
}
// MenuMobile


// SignCheck
const signCheck = document.querySelector('.sign__check');
if (signCheck) {
	signCheck.addEventListener('click', () => {
		signCheck.classList.toggle('active');
	})
}
// SignCheck

// CurrentCheck
const currentCheck = document.querySelector('.edit-general-work__current');
if (currentCheck) {
	currentCheck.addEventListener('click', () => {
		currentCheck.classList.toggle('active');
	})
}
// CurrentCheck

// dropCheck
const dropCheck = document.querySelectorAll('.edit-general-main__check');
if (dropCheck[0]) {
	for (const btn of dropCheck) {
		btn.addEventListener('click', () => {
			btn.classList.toggle('active');
		})
	}
}
// dropCheck

// SignPopups
const popupPhone = document.querySelector('.popup-phone');
const popupVer = document.querySelector('.popup-ver');
const popupNumber = document.querySelector('.popup-number');
const signBtn = document.querySelector('.sign__btn');
const signPhoneBtn = document.querySelector('.popup-phone__btn');
const signVerBtn = document.querySelector('.popup-ver__btn');
const signNumberBtn = document.querySelector('.popup-number__btn');

if (signBtn) {
	signBtn.addEventListener('click', () => {
		popupPhone.classList.toggle('active');
	});
	signPhoneBtn.addEventListener('click', () => {
		popupPhone.classList.toggle('active');
		popupVer.classList.toggle('active');
	});
	signVerBtn.addEventListener('click', () => {
		popupVer.classList.toggle('active');
		popupNumber.classList.toggle('active');
	});
	signNumberBtn.addEventListener('click', () => {
		popupNumber.classList.toggle('active');
		window.location.href = "https://nazarbog123.github.io/spherework/profile.html";
	});
}

const popupForgot = document.querySelector('.popup-forgot');
const popupPass = document.querySelector('.popup-pass');
const popupPassBtn = document.querySelector('.popup-pass__btn');
const popupForgotBtn = document.querySelector('.popup-forgot__btn');
const forgotBtn = document.querySelector('.sign__forgot');

if (forgotBtn) {
	forgotBtn.addEventListener('click', () => {
		popupForgot.classList.toggle('active');
	});
	popupForgotBtn.addEventListener('click', () => {
		popupForgot.classList.toggle('active');
		popupPass.classList.toggle('active');
	});
	popupPassBtn.addEventListener('click', () => {
		popupPass.classList.toggle('active');
	});
}
// SignPopups



// MobileProfileContent
const peofileBtn = document.querySelectorAll('.profile-mobile__btn');
const peofileContent = document.querySelectorAll('.profile-mobile__content_child')
const profile = document.querySelector('.profile')

if (profile) {
	for (const btn of peofileBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of peofileBtn) {
				btn2.classList.remove('active');
			}
			btn.classList.add('active');

			for (const content of peofileContent) {
				if (content.getAttribute('data-index') == btn.getAttribute('data-index')) {
					content.classList.add('active');
				} else {
					content.classList.remove('active');
				}
			}
		});
	}
}
// MobileProfileContent



// EditGeneralSocial
const genEditBtnSocial = document.querySelector('.edit-general__editbtn_3');
const genEditBtnSocialCancel = document.querySelector('.edit-general-social__cancel');
const genRealSocialContent = document.querySelector('.edit-general-social');
const genEditSocialContent = document.querySelector('.edit-general-social_2');

if (genEditBtnSocial) {
	genEditBtnSocial.addEventListener('click', () => {
		genRealSocialContent.classList.toggle('removed');
		genEditSocialContent.classList.toggle('active');
	});
	genEditBtnSocialCancel.addEventListener('click', () => {
		genRealSocialContent.classList.toggle('removed');
		genEditSocialContent.classList.toggle('active');
	});
}
// EditGeneralSocial

// EditGeneralWork
const genEditBtnWork = document.querySelector('.edit-general__editbtn_2');
const genEditBtnWorkCancel = document.querySelector('.edit-general-work__cancel');
const genRealWorkContent = document.querySelector('.edit-general-work');
const genEditWorkContent = document.querySelector('.edit-general-work_2');

if (genEditBtnWork) {
	genEditBtnWork.addEventListener('click', () => {
		genRealWorkContent.classList.toggle('removed');
		genEditWorkContent.classList.toggle('active');
	});
	genEditBtnWorkCancel.addEventListener('click', () => {
		genRealWorkContent.classList.toggle('removed');
		genEditWorkContent.classList.toggle('active');
	});
}
// EditGeneralWork

// EditGeneralMain
const genEditBtnMain = document.querySelector('.edit-general__editbtn_1');
const genEditBtnMainCancel = document.querySelector('.edit-general-main__cancel');
const genRealMainContent = document.querySelector('.edit-general-main');
const genEditMainContent = document.querySelector('.edit-general-main_2');

if (genEditBtnMain) {
	genEditBtnMain.addEventListener('click', () => {
		genRealMainContent.classList.toggle('removed');
		genEditMainContent.classList.toggle('active');
	});
	genEditBtnMainCancel.addEventListener('click', () => {
		genRealMainContent.classList.toggle('removed');
		genEditMainContent.classList.toggle('active');
	});
}
// EditGeneralMain

// GeneralMainSkills
const skillsDrop = document.querySelector('.edit-general-main__drop');
const skillsOpen = document.querySelector('.edit-general-main__open');
const skillsCancel = document.querySelector('.edit-general-main__drop_cancel');

if (skillsDrop) {
	skillsOpen.addEventListener('click', () => {
		skillsDrop.classList.toggle('active');
	});
	skillsCancel.addEventListener('click', () => {
		skillsDrop.classList.toggle('active');
	});
}
// GeneralMainSkills

// WalletGraphBtn
const walletGraphBtn = document.querySelectorAll('.wallet-graph__btn')
const wallet = document.querySelector('.wallet')

if (wallet) {
	for (const btn of walletGraphBtn) {
		btn.addEventListener('click', () => {
			for (const btn2 of walletGraphBtn) {
				btn2.classList.remove('active')
			}
			btn.classList.add('active');
		});
	}
}
// WalletGraphBtn

// WalletDrop
const walletDrop = document.querySelector('.wallet-info__drop_wrap');
const walletDropOpen = document.querySelector('.wallet-info__open');
const walletDropClose = document.querySelector('.wallet-info__close');

if (wallet) {
	walletDropOpen.addEventListener('click', () => {
		walletDrop.classList.toggle('active');
	});
	walletDropClose.addEventListener('click', () => {
		walletDrop.classList.toggle('active');
	});
}
// WalletDrop



// INCLUDE JQUERY & JQUERY UI 1.12.1
$(function () {
	$("#datepicker").datepicker({
		dateFormat: "dd-mm-yy"
		, duration: "fast"
	});
});

$(function () {
	$("#datepicker2").datepicker({
		dateFormat: "dd-mm-yy"
		, duration: "fast"
	});
});