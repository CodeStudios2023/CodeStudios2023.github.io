
window.addEventListener('message', function(event) {
    const data = event.data;
    
      if (data.action == "loaded") {
      $('.main').fadeIn();
      $('#first').text(data.ServerName_First);
      $('#second').text(data.ServerName_Second);
      $('#scoreboard-first').text(data.Scoreboard_First);
      $('#scoreboard-second').text(data.Scoreboard_Second);
      $('#cash-title').text(data.Cash);
      $('#blackmoney-title').text(data.BlackMoney);
      $('#gps').text(data.GPS);
      }
      if (data.action == "showHelpUI") {
        $('.help-notify').fadeIn();
        $('#help-input-key').text(data.key);
        $('#help-text').text(data.text);
      }
      if (data.action == "hideHelpUI") {
        $('.help-notify').fadeOut();
      }
      if (data.action == "hideAll") {
        $('.main').hide();
      }
      if (data.action == "showHUD") {
        $('body').fadeIn();
      }
      if (data.action == "hideHUD") {
        $('body').fadeOut();
      }
      if (data.action == "openScoreboard") {
        $('#scoreboard').fadeIn();
        }
       if (data.action == "closeScoreboard") {
        $('#scoreboard').fadeOut();
        }  
      if (data.action == 'addJobs') {
        AddJobToScoreboard(data.job, data.count);
      }
       if (event.data.action == "setCash") {
        $("#cash-data").text(data.Currency+formatter.format(event.data.money));
       }
       if (event.data.action == "setBlackMoney") {
        $('#blackmoney-box').show();
        $("#blackmoney-data").text(data.Currency+formatter.format(event.data.money));
       }
       if (event.data.action == "hideBlackMoney") {
        $('#blackmoney-box').hide();
       }
       if (event.data.action == "voiceON") {
        $('.voice').css("color", "var(--VoiceActive)");
       }
       if (event.data.action == "voiceOFF") {
        $('.voice').css("color", "var(--Voice)");
       }
       if (event.data.action == "voiceMuted") {
        $('.voice').css("color", "var(--VoiceMuted)");
       }
       if (event.data.action == "voiceUnmuted") {
        $('.voice').css("color", "var(--Voice)");
       }
       if (event.data.action == "radioON") {
        $('.radio').css("color", "var(--RadioActive)");
       }
       if (event.data.action == "radioOFF") {
        $('.radio').css("color", "var(--Radio)");
       }
       if (event.data.action == "TalkRange4-Enabled") {
        $('#voice-range-4').show();
       }
       if (event.data.action == "TalkRange4-Disabled") {
        $('#voice-range-4').hide();
       }
  
       if (event.data.action == "VoiceRange-1") {
        $('#voice-range-1').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-2').css("background", "var(--Voice-Range)");
        $('#voice-range-3').css("background", "var(--Voice-Range)");
        $('#voice-range-4').css("background", "var(--Voice-Range)");
       }
       if (event.data.action == "VoiceRange-2") {
        $('#voice-range-1').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-2').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-3').css("background", "var(--Voice-Range)");
        $('#voice-range-4').css("background", "var(--Voice-Range)");
       }
       if (event.data.action == "VoiceRange-3") {
        $('#voice-range-1').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-2').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-3').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-4').css("background", "var(--Voice-Range)");
       }
       if (event.data.action == "VoiceRange-4") {
        $('#voice-range-1').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-2').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-3').css("background", "var(--Voice-Range-Active)");
        $('#voice-range-4').css("background", "var(--Voice-Range-Active)");
       }
       if (event.data.action == "updateHUD") {
        $('#total-players').text(event.data.players);
        $('#playerID').text(event.data.playerID);
        $('#job-label').text(event.data.job);
        $('#grade-label').text(event.data.jobGrade);
        $('#location').text(event.data.location);
        $('#health-progress').css("width", event.data.health+"%");
        $('#armor-progress').css("width", event.data.armor+"%");
       }
       if (event.data.action == "updateWeapon") {
        $('#weapon-box').show();
        $('#clip-ammo').text(event.data.clipAmmo);
        $('#total-ammo').text(event.data.totalAmmo);
        $('#weapon-label').text(event.data.weaponLabel);
        $('#weapon-image').css("background-image", "url(weapons/" + event.data.weaponImage+".png");
       }
       if (event.data.action == "hideClip") {
        $('#clip-ammo').hide();
        $('#slash').hide();
       }
       if (event.data.action == "showClip") {
        $('#clip-ammo').show();
        $('#slash').show();
       }
       if (event.data.action == "hideAmmo") {
        $('#total-ammo').hide();
        $('#slash').hide();
       }
       if (event.data.action == "showAmmo") {
        $('#total-ammo').show();
        $('#slash').show();
       }
       if (event.data.action == "hideWeapon") {
        $('#weapon-box').hide();
       }
       if (event.data.action == "showSettings") {
        $('#settings-container').show();
       }
       if (event.data.action == "minimapON") {
        $('#thirst').css("top", "72.98vh");
        $('#hunger').css("top", "72.98vh");
        $('#hunger').css("left", "17.4vh");
        $('.bottom-box').css("left", "32.2vh");
        $('.bottom-box').css("margin-top", "3.4vh");
       }
       if (event.data.action == "minimapOFF") {
        $('#thirst').css("top", "91.92vh");
        $('#hunger').css("top", "86.6vh");
        $('#hunger').css("left", "2.6vh");
        $('.bottom-box').css("left", "17.4vh");
        $('.bottom-box').css("margin-top", "1.8vh");
       }
       if (event.data.action == "hunger-100") {
        $('#hunger-1').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-2').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-3').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-4').css('background', 'var(--Hunger-LineActive)');
        $('.hunger-circle').css('background', 'var(--Hunger-Circle)');
        $('.hunger-circle').css('border', '0.28vh solid var(--Hunger-Circle-Border)');
        $('.hunger-circle').css('filter', 'var(--Hunger-Circle-Shadow)');
        $('.hunger-circle').css("animation", "none");
        $('#hunger-border').css("animation", "none");
        $('#hunger-border').css("fill", "var(--Hunger-Border)");
        $('#hunger-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Hunger-Border))');
       }
       if (event.data.action == "hunger-75") {
        $('#hunger-1').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-2').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-3').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-4').css('background', 'var(--Hunger-Line)');
        $('.hunger-circle').css('background', 'var(--Hunger-Circle)');
        $('.hunger-circle').css('border', '0.28vh solid var(--Hunger-Circle-Border)');
        $('.hunger-circle').css('filter', 'var(--Hunger-Circle-Shadow)');
        $('.hunger-circle').css("animation", "none");
        $('#hunger-border').css("animation", "none");
        $('#hunger-border').css("fill", "var(--Hunger-Border)");
        $('#hunger-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Hunger-Border))');
       }
       if (event.data.action == "hunger-50") {
        $('#hunger-1').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-2').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-3').css('background', 'var(--Hunger-Line)');
        $('#hunger-4').css('background', 'var(--Hunger-Line)');
        $('.hunger-circle').css('background', 'var(--Hunger-Circle)');
        $('.hunger-circle').css('border', '0.28vh solid var(--Hunger-Circle-Border)');
        $('.hunger-circle').css('filter', 'var(--Hunger-Circle-Shadow)');
        $('.hunger-circle').css("animation", "none");
        $('#hunger-border').css("animation", "none");
        $('#hunger-border').css("fill", "var(--Hunger-Border)");
        $('#hunger-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Hunger-Border))');
       }
       if (event.data.action == "hunger-25") {
        $('#hunger-1').css('background', 'var(--Hunger-LineActive)');
        $('#hunger-2').css('background', 'var(--Hunger-Line)');
        $('#hunger-3').css('background', 'var(--Hunger-Line)');
        $('#hunger-4').css('background', 'var(--Hunger-Line)');
        $('.hunger-circle').css('background', 'var(--Hunger-Circle)');
        $('.hunger-circle').css('border', '0.28vh solid var(--Hunger-Circle-Border)');
        $('.hunger-circle').css('filter', 'var(--Hunger-Circle-Shadow)');
        $('.hunger-circle').css("animation", "none");
        $('#hunger-border').css("animation", "none");
        $('#hunger-border').css("fill", "var(--Hunger-Border)");
        $('#hunger-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Hunger-Border))');
       }
       if (event.data.action == "hunger-0") {
        $('#hunger-1').css('background', 'var(--Hunger-Line)');
        $('#hunger-2').css('background', 'var(--Hunger-Line)');
        $('#hunger-3').css('background', 'var(--Hunger-Line)');
        $('#hunger-4').css('background', 'var(--Hunger-Line)');
        $('.hunger-circle').css('background', '#701714');
        $('.hunger-circle').css('border', '0.28vh solid #ff0000');
        $('.hunger-circle').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
        $('.hunger-circle').css("animation", "blink 1s infinite");
        $('#hunger-border').css("animation", "blink 1s infinite");
        $('#hunger-border').css("fill", "#ff0000");
        $('#hunger-border').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
       }
  
       if (event.data.action == "thirst-100") {
        $('#thirst-1').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-2').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-3').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-4').css('background', 'var(--Thirst-LineActive)');
        $('.thirst-circle').css('background', 'var(--Thirst-Circle)');
        $('.thirst-circle').css('border', '0.28vh solid var(--Thirst-Circle-Border)');
        $('.thirst-circle').css('filter', 'var(--Thirst-Circle-Shadow)');
        $('.thirst-circle').css("animation", "none");
        $('#thirst-border').css("animation", "none");
        $('#thirst-border').css("fill", "var(--Thirst-Border)");
        $('#thirst-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Thirst-Border))');
       }
       if (event.data.action == "thirst-75") {
        $('#thirst-1').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-2').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-3').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-4').css('background', 'var(--Thirst-Line)');
        $('.thirst-circle').css('background', 'var(--Thirst-Circle)');
        $('.thirst-circle').css('border', '0.28vh solid var(--Thirst-Circle-Border)');
        $('.thirst-circle').css('filter', 'var(--Thirst-Circle-Shadow)');
        $('.thirst-circle').css("animation", "none");
        $('#thirst-border').css("animation", "none");
        $('#thirst-border').css("fill", "var(--Thirst-Border)");
        $('#thirst-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Thirst-Border))');
       }
       if (event.data.action == "thirst-50") {
        $('#thirst-1').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-2').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-3').css('background', 'var(--Thirst-Line)');
        $('#thirst-4').css('background', 'var(--Thirst-Line)');
        $('.thirst-circle').css('background', 'var(--Thirst-Circle)');
        $('.thirst-circle').css('border', '0.28vh solid var(--Thirst-Circle-Border)');
        $('.thirst-circle').css('filter', 'var(--Thirst-Circle-Shadow)');
        $('.thirst-circle').css("animation", "none");
        $('#thirst-border').css("animation", "none");
        $('#thirst-border').css("fill", "var(--Thirst-Border)");
        $('#thirst-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Thirst-Border))');
       }
       if (event.data.action == "thirst-25") {
        $('#thirst-1').css('background', 'var(--Thirst-LineActive)');
        $('#thirst-2').css('background', 'var(--Thirst-Line)');
        $('#thirst-3').css('background', 'var(--Thirst-Line)');
        $('#thirst-4').css('background', 'var(--Thirst-Line)');
        $('.thirst-circle').css('background', 'var(--Thirst-Circle)');
        $('.thirst-circle').css('border', '0.28vh solid var(--Thirst-Circle-Border)');
        $('.thirst-circle').css('filter', 'var(--Thirst-Circle-Shadow)');
        $('.thirst-circle').css("animation", "none");
        $('#thirst-border').css("animation", "none");
        $('#thirst-border').css("fill", "var(--Thirst-Border)");
        $('#thirst-border').css('filter', 'drop-shadow(0vh 0vh 0.6vh var(--Thirst-Border))');
       }
       if (event.data.action == "thirst-0") {
        $('#thirst-1').css('background', 'var(--Thirst-Line)');
        $('#thirst-2').css('background', 'var(--Thirst-Line)');
        $('#thirst-3').css('background', 'var(--Thirst-Line)');
        $('#thirst-4').css('background', 'var(--Thirst-Line)');
        $('.thirst-circle').css('background', '#701714');
        $('.thirst-circle').css('border', '0.28vh solid #ff0000');
        $('.thirst-circle').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
        $('.thirst-circle').css("animation", "blink 1s infinite");
        $('#thirst-border').css("animation", "blink 1s infinite");
        $('#thirst-border').css("fill", "#ff0000");
        $('#thirst-border').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
       }
       if (event.data.action == "showCarHUD") {
        $('.car-hud-container').fadeIn();
       }
       if (event.data.action == "hideCarHUD") {
        $('.car-hud-container').fadeOut();
       }
       if (event.data.action == "updateVehicle") {
        $('#vehicle-speed').text(event.data.vehicleSpeed);
        $('#vehicle-fuel').text(event.data.vehicleFuel+"L");
        $('#vehicle-speed-unit').text(data.speedUnit);
        if (data.vehicleFuel <= 20 ) {
          $('.fuel-icon').css("fill", "var(--FuelActive)");
          $('.fuel-status').css("color", "var(--FuelActive)");
          $('.fuel-status').css("animation", "blink 1s infinite");
        } else {
          $('.fuel-icon').css("fill", "var(--Fuel)");
          $('.fuel-status').css("color", "var(--White)");
          $('.fuel-status').css("animation", "none");
        }
      
       }
       if (event.data.action == "engineON") {
        $('.engine-icon').css("fill", "var(--EngineActive)");
       }
       if (event.data.action == "engineOFF") {
        $('.engine-icon').css("fill", "var(--Engine)");
       }
       if (event.data.action == "vehicleLocked") {
        $('.door-lock-icon').css("fill", "var(--DoorlockActive)");
       }
       if (event.data.action == "vehicleUnlocked") {
        $('.door-lock-icon').css("fill", "var(--Doorlock)");
       }
       if (event.data.action == "headlightsON") {
        $('.headlights-icon').css("fill", "var(--HeadlightsActive)");
       }
       if (event.data.action == "headlightsOFF") {
        $('.headlights-icon').css("fill", "var(--Headlights)");
       }
       if (event.data.action == "seatbeltOFF") {
        $('.seatbelt-icon').css("fill", "var(--Seatbelt)");
       }
       if (event.data.action == "seatbeltON") {
        $('.seatbelt-icon').css("fill", "var(--SeatbeltActive)");
       }
       if (event.data.action == "playBuckleSound") {
        var buckleSound = new Audio("sounds/buckle.mp3");
        buckleSound.volume = 0.14;
        buckleSound.play()
       }
       if (event.data.action == "playUnbuckleSound") {
        var unbuckleSound = new Audio("sounds/unbuckle.mp3");
        unbuckleSound.volume = 0.14;
        unbuckleSound.play()
       }
       if (event.data.action == "Gear-0") {
        $('#gear-1').css("background", "var(--Gear)");
        $('#gear-2').css("background", "var(--Gear)");
        $('#gear-3').css("background", "var(--Gear)");
        $('#gear-4').css("background", "var(--Gear)");
        $('#gear-5').css("background", "var(--Gear)");
        $('#gear-6').css("background", "var(--Gear)");
       }
       if (event.data.action == "Gear-1") {
        $('#gear-1').css("background", "var(--GearActive)");
        $('#gear-2').css("background", "var(--Gear)");
        $('#gear-3').css("background", "var(--Gear)");
        $('#gear-4').css("background", "var(--Gear)");
        $('#gear-5').css("background", "var(--Gear)");
        $('#gear-6').css("background", "var(--Gear)");
       }
       if (event.data.action == "Gear-2") {
        $('#gear-1').css("background", "var(--GearActive)");
        $('#gear-2').css("background", "var(--GearActive)");
        $('#gear-3').css("background", "var(--Gear)");
        $('#gear-4').css("background", "var(--Gear)");
        $('#gear-5').css("background", "var(--Gear)");
        $('#gear-6').css("background", "var(--Gear)");
       }
       if (event.data.action == "Gear-3") {
        $('#gear-1').css("background", "var(--GearActive)");
        $('#gear-2').css("background", "var(--GearActive)");
        $('#gear-3').css("background", "var(--GearActive)");
        $('#gear-4').css("background", "var(--Gear)");
        $('#gear-5').css("background", "var(--Gear)");
        $('#gear-6').css("background", "var(--Gear)");
       }
       if (event.data.action == "Gear-4") {
        $('#gear-1').css("background", "var(--GearActive)");
        $('#gear-2').css("background", "var(--GearActive)");
        $('#gear-3').css("background", "var(--GearActive)");
        $('#gear-4').css("background", "var(--GearActive)");
        $('#gear-5').css("background", "var(--Gear)");
        $('#gear-6').css("background", "var(--Gear)");
       }
       if (event.data.action == "Gear-5") {
        $('#gear-1').css("background", "var(--GearActive)");
        $('#gear-2').css("background", "var(--GearActive)");
        $('#gear-3').css("background", "var(--GearActive)");
        $('#gear-4').css("background", "var(--GearActive)");
        $('#gear-5').css("background", "var(--GearActive)");
        $('#gear-6').css("background", "var(--Gear)");
       }
       if (event.data.action == "Gear-6") {
        $('#gear-1').css("background", "var(--GearActive)");
        $('#gear-2').css("background", "var(--GearActive)");
        $('#gear-3').css("background", "var(--GearActive)");
        $('#gear-4').css("background", "var(--GearActive)");
        $('#gear-5').css("background", "var(--GearActive)");
        $('#gear-6').css("background", "var(--GearActive)");
       }
       if (event.data.action == "getJobs") {
        $('#Job-1').text(data.Job1);
        $('#Job-1-Count').text(data.Job1_Count);
        $('#Job-1-Image').css("background-image", "url("+data.Job1_Image+"");
        $('#Job-2').text(data.Job2);
        $('#Job-2-Count').text(data.Job2_Count);
        $('#Job-2-Image').css("background-image", "url("+data.Job2_Image+"");
        $('#Job-3').text(data.Job3);
        $('#Job-3-Count').text(data.Job3_Count);
        $('#Job-3-Image').css("background-image", "url("+data.Job3_Image+"");
        $('#Job-4').text(data.Job4);
        $('#Job-4-Count').text(data.Job4_Count);
        $('#Job-4-Image').css("background-image", "url("+data.Job4_Image+"");
        $('#Job-5').text(data.Job5);
        $('#Job-5-Count').text(data.Job5_Count);
        $('#Job-5-Image').css("background-image", "url("+data.Job5_Image+"");
        $('#Job-6').text(data.Job6);
        $('#Job-6-Count').text(data.Job6_Count);
        $('#Job-6-Image').css("background-image", "url("+data.Job6_Image+"");
        $('#Job-7').text(data.Job7);
        $('#Job-7-Count').text(data.Job7_Count);
        $('#Job-7-Image').css("background-image", "url("+data.Job7_Image+"");
        $('#Job-8').text(data.Job8);
        $('#Job-8-Count').text(data.Job8_Count);
        $('#Job-8-Image').css("background-image", "url("+data.Job8_Image+"");
       }
       if (event.data.action == "hideJob-1") {
        $('#1').hide();
       }
       if (event.data.action == "hideJob-2") {
        $('#2').hide();
       }
       if (event.data.action == "hideJob-3") {
        $('#3').hide();
       }
       if (event.data.action == "hideJob-4") {
        $('#4').hide();
       }
       if (event.data.action == "hideJob-5") {
        $('#5').hide();
       }
       if (event.data.action == "hideJob-6") {
        $('#6').hide();
       }
       if (event.data.action == "hideJob-7") {
        $('#7').hide();
       }
       if (event.data.action == "hideJob-8") {
        $('#8').hide();
       }
       if (event.data.action == "showJob-1") {
        $('#1').show();
       }
       if (event.data.action == "showJob-2") {
        $('#2').show();
       }
       if (event.data.action == "showJob-3") {
        $('#3').show();
       }
       if (event.data.action == "showJob-4") {
        $('#4').show();
       }
       if (event.data.action == "showJob-5") {
        $('#5').show();
       }
       if (event.data.action == "showJob-6") {
        $('#6').show();
       }
       if (event.data.action == "showJob-7") {
        $('#7').show();
       }
       if (event.data.action == "showJob-8") {
        $('#8').show();
       }
       switch (event.data.action) {
        case "updateRPM":
                var RPM = (event.data.EngineSpeed * 15).toFixed(2);
  
                if (RPM >= 3.2) {
                    $("#rpm-1").css("background", "var(--rpmActive1)");
                } else {
                    $("#rpm-1").css("background", "var(--rpm)");
                }
                
                if (RPM >= 3.5) {
                    $("#rpm-2").css("background", "var(--rpmActive1)");
                } else {
                    $("#rpm-2").css("background", "var(--rpm)");
                }
        
                if (RPM >= 3.8) {
                    $("#rpm-3").css("background", "var(--rpmActive1)");
                } else {
                    $("#rpm-3").css("background", "var(--rpm)");
                }
        
                if (RPM >= 4) {
                    $("#rpm-4").css("background", "var(--rpmActive1)");
                } else {
                    $("#rpm-4").css("background", "var(--rpm)");
                }
        
                if (RPM >= 5) {
                  $("#rpm-5").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-5").css("background", "var(--rpm)");
                }
        
                if (RPM >= 5.5) {
                  $("#rpm-6").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-6").css("background", "var(--rpm)");
                }
        
                if (RPM >= 6) {
                  $("#rpm-7").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-7").css("background", "var(--rpm)");
                }
        
                if (RPM >= 6.5) {
                  $("#rpm-8").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-8").css("background", "var(--rpm)");
                }
  
                if (RPM >= 7) {
                  $("#rpm-9").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-9").css("background", "var(--rpm)");
                }
        
        
                if (RPM >= 8) {
                  $("#rpm-10").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-10").css("background", "var(--rpm)");
                }
                
                if (RPM >= 9) {
                  $("#rpm-11").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-11").css("background", "var(--rpm)");
                }
      
                if (RPM >= 10) {
                  $("#rpm-12").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-12").css("background", "var(--rpm)");
                }
        
                if (RPM >= 11) {
                  $("#rpm-13").css("background", "var(--rpmActive1)");
                } else {
                  $("#rpm-13").css("background", "var(--rpm)");
                }
        
                if (RPM >= 12) {
                  $("#rpm-14").css("background", "var(--rpmActive2)");
                } else {
                  $("#rpm-14").css("background", "var(--rpm)");
                }
                
                if (RPM >= 12.5) {
                  $("#rpm-15").css("background", "var(--rpmActive2)");
                } else {
                  $("#rpm-15").css("background", "var(--rpm)");
                }
        
                if (RPM >= 13) {
                    $("#rpm-16").css("background", "var(--rpmActive2)");
                } else {
                  $("#rpm-16").css("background", "var(--rpm)");
                }
        
                if (RPM >= 13.5) {
                  $("#rpm-17").css("background", "var(--rpmActive2)");
                } else {
                  $("#rpm-17").css("background", "var(--rpm)");
                }
        
  
                if (RPM >= 13.8) {
                  $("#rpm-18").css("background", "var(--rpmActive3)");
                } else {
                  $("#rpm-18").css("background", "var(--rpm)");
                }
        
                if (RPM >= 14) {
                  $("#rpm-19").css("background", "var(--rpmActive3)");
                } else {
                  $("#rpm-19").css("background", "var(--rpm)");
                }
        
                if (RPM >= 14.5) {
                  $("#rpm-20").css("background", "var(--rpmActive3)");
                } else {
                  $("#rpm-20").css("background", "var(--rpm)");
                }
  
                if (RPM >= 15) {
                  $("#rpm-21").css("background", "var(--rpmActive3)");
                } else {
                  $("#rpm-21").css("background", "var(--rpm)");
                }
            }
            if (event.data.action == "stopProgressBar") {
              console.log("canceled")
              ProgressActive = false;
              $(".progressbar-text").text(data.text);
              $("#progressbar-container").fadeOut(600);
              setTimeout(function () {
                {
                  (".progressbar-line").css("background", "var(--Main-Progress)");
                }
            }, 320)
            }
            if (event.data.action == "ProgressBar") {
              ProgressActive = true;
              $("#progressbar-container").fadeIn(600);
              $(".progressbar-text").text(data.text);
            var start = new Date();
            var maxTime = data.time;
            var timeoutVal = Math.floor(maxTime/100);
            animateUpdate();
          
            function animateUpdate() {
              var now = new Date();
              var timeDiff = now.getTime() - start.getTime();
              var perc = Math.round((timeDiff/maxTime)*100);
              if (ProgressActive) {
              if (perc >= 7) {
                $("#progress-line-1").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 14) {
                $("#progress-line-2").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 21) {
                $("#progress-line-3").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 28) {
                $("#progress-line-4").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 35) {
                $("#progress-line-5").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 42) {
                $("#progress-line-6").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 49) {
                $("#progress-line-7").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 56) {
                $("#progress-line-8").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 63) {
                $("#progress-line-9").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 70) {
                $("#progress-line-10").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 77) {
                $("#progress-line-11").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 85) {
                $("#progress-line-12").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 92) {
                $("#progress-line-13").css("background", "var(--Main-ProgressActive)");
              }
              if (perc >= 100) {
                $("#progress-line-14").css("background", "var(--Main-ProgressActive)");
                $("#percent").text(100+"%");
              }
              if (perc <= 100)  {
                setTimeout(animateUpdate, timeoutVal);
                $("#percent").text(perc+"%");
              } else {
                $("#percent").text(100+"%");
                $("#progressbar-container").fadeOut(600);
                setTimeout(function () {
                  {
                    $(".progressbar-line").css("background", "var(--Main-Progress)");
                  }
              }, 320)
              }
            }
            }
        };
        if (data.action == 'SendNotify') {
          var number = Math.floor((Math.random() * 1000) + 1);
          var sound = new Audio("sounds/"+data.sound+".mp3");
                sound.volume = 0.14;
          $('.notify-wrapper').append(`
          <div class="notify-container wrapper-${number}">
          <div style="border:0.4vh ${data.color} solid;filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="notify-outer-circle">
          <div style="background:${data.color};"class="notify-inner-circle">
          <div style="background-image:url('notify-images/${data.icon}.png');"class="notify-image"></div></div></div>
              <div style="filter:drop-shadow(0vh 0vh 0.8vh ${data.color});color:${data.color}"class="notify-title notify-progress">${data.title}</div>
                <br><span style="opacity:0;">${[data.text]}</span>
                <div class="notify-text notify-progress"><span  style="filter: drop-shadow(0vh 0vh 0.4vh #ffffff5e);"id="text">${data.text}</span>
                <div style="background:${data.color};filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="notify-progress-inner"></div>
            </div>
          </div>`)
          $(`.wrapper-${number}`).fadeIn("slow");
          sound.play()
          $('.notify-progress-inner').css({ height: '0px' }).animate({
            height: '100%',
          }, event.data.time, 'linear',
          )
          setTimeout(function () {
              $(`.wrapper-${number}`).fadeOut( "slow", function () {
                  $(`.wrapper-${number}`).remove()
              })
          }, event.data.time)
      }
      if (data.action == 'SendTeamchat') {
        var number = Math.floor((Math.random() * 1000) + 1);
        var sound = new Audio("sounds/"+data.sound+".mp3");
        sound.volume = 0.14;
        $('.teamchat-wrapper').append(`
          <div class="teamchat-container wrapper-${number}">
          <div style="border:0.4vh ${data.color} solid;filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="teamchat-outer-circle">
          <div style="background:${data.color};"class="teamchat-inner-circle">
          <div style="background-image:url('notify-images/${data.icon}.png');"class="teamchat-image"></div></div></div>
                   <div style="filter:drop-shadow(0vh 0vh 0.8vh ${data.color});color:${data.color}"class="teamchat-title teamchat-progress">${data.title} - <span style="filter: drop-shadow(0vh 0vh 0.8vh #ffffff5e);color:#c7c7c7;font-size:1.2vh">${data.playerName}</span></div>
                <br><span style="opacity:0;">${[data.text]}</span>
                <div class="teamchat-text teamchat-progress"><span style="filter: drop-shadow(0vh 0vh 0.4vh #ffffff5e);"id="text">${data.text}</span>
                <div style="background:${data.color};filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="teamchat-progress-inner"></div>
            </div>
          </div>`)
          $(`.wrapper-${number}`).fadeIn("slow");
          sound.play()
          $('.teamchat-progress-inner').css({ height: '0px' }).animate({
            height: '100%',
          }, event.data.time, 'linear',
          )
        setTimeout(function () {
            $(`.wrapper-${number}`).fadeOut( "slow", function () {
                $(`.wrapper-${number}`).remove()
            })
        }, event.data.time)
    }
      if (data.action == 'SendAnnounce') {
        var number = Math.floor((Math.random() * 1000) + 1);
        var sound = new Audio("sounds/"+data.sound+".mp3");
        sound.volume = 0.14;
        $('.announce-wrapper').append(`
          <div class="announce-container wrapper-${number}">
          <div style="border:0.4vh ${data.color} solid;filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="announce-outer-circle">
          <div style="background:${data.color};"class="announce-inner-circle">
          <div style="background-image:url('notify-images/${data.icon}.png');"class="announce-image"></div></div></div>
                <div style="filter:drop-shadow(0vh 0vh 0.8vh ${data.color});color:${data.color}"class="announce-title announce-progress">${data.title}</div>
                <br><span style="opacity:0;">${[data.text]}</span>
                <div class="announce-text announce-progress"><span style="filter: drop-shadow(0vh 0vh 0.4vh #ffffff5e);id="text">${data.text}</span>
                <div style="background:${data.color};filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="announce-progress-inner"></div>
            </div>
          </div>`)
        $(`.wrapper-${number}`).fadeIn("slow");
        sound.play()
        $('.announce-progress-inner').css({ width: '0px' }).animate({
          width: '100%',
        }, event.data.time, 'linear',
        )
        setTimeout(function () {
            $(`.wrapper-${number}`).fadeOut( "slow", function () {
                $(`.wrapper-${number}`).remove()
            })
        }, event.data.time)
    }
  
    if (data.action == 'SendCustomAnnounce') {
      var number = Math.floor((Math.random() * 1000) + 1);
      var sound = new Audio("sounds/"+data.sound+".mp3");
      sound.volume = 0.14;
      $('.announce-wrapper').append(`
      <div class="announce-container wrapper-${number}">
      <div style="border:0.4vh ${data.color} solid;filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="announce-outer-circle">
      <div style="background:${data.color};"class="announce-inner-circle">
      <div style="background-image:url('notify-images/${data.icon}.png');"class="announce-image"></div></div></div>
            <div style="filter:drop-shadow(0vh 0vh 0.8vh ${data.color});color:${data.color}"class="announce-title announce-progress">${data.title}</div>
            <br><span style="opacity:0;">${[data.text]}</span>
            <div class="announce-text announce-progress"><span style="filter: drop-shadow(0vh 0vh 0.4vh #ffffff5e);id="text">${data.text}</span>
            <div style="background:${data.color};filter:drop-shadow(0vh 0vh 0.8vh ${data.color})"class="announce-progress-inner"></div>
        </div>
      </div>`)
      $(`.wrapper-${number}`).fadeIn("slow");
      sound.play()
      $('.announce-progress-inner').css({ width: '0px' }).animate({
        width: '100%',
      }, event.data.time, 'linear',
      )
      setTimeout(function () {
          $(`.wrapper-${number}`).fadeOut( "slow", function () {
              $(`.wrapper-${number}`).remove()
          })
      }, event.data.time)
  }
  });
  
  function Test() {
    $('.hunger-circle').css('background', '#f55959');
    $('.hunger-circle').css('border', '0.28vh solid #ff0000');
    $('.hunger-circle').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
    $('.hunger-circle').css("animation", "blink 1s infinite");
    $('#hunger-border').css("animation", "blink 1s infinite");
    $('#hunger-border').css("fill", "#f55959");
    $('#hunger-border').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
  
    $('.thirst-circle').css('background', '#f55959');
    $('.thirst-circle').css('border', '0.28vh solid #ff0000');
    $('.thirst-circle').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
    $('.thirst-circle').css("animation", "blink 1s infinite");
    $('#thirst-border').css("animation", "blink 1s infinite");
    $('#thirst-border').css("fill", "#f55959");
    $('#thirst-border').css('filter', 'drop-shadow(0.2vh 0.2vh 0.6vh #f55959)');
  }
  
  
  function AddJobToScoreboard(playerName, playerID, ping) {
    $("#scoreboard-list").append(`
       <div class="big-socreboard-item-box">` + playerName + ` ` + playerID + ` ` + ping + `
       </div>
    `);
  }
  
  
  document.onkeyup = function(data) {
    if (data.which == 27) {
      $('#scoreboard').fadeOut();
    }
    }
  
  function CheckBox() {
    var infoBoxCheck = document.getElementById("info-box-check");
    var cashBoxCheck = document.getElementById("cash-box-check");
    var blackmoneyBoxCheck = document.getElementById("blackmoney-box-check");
  
    if (infoBoxCheck.checked == true){
      $('#info-box').show();
    } else {
      $('#info-box').hide();
    }
    if (cashBoxCheck.checked == true){
      $('#cash-box').show();
    } else {
      $('#cash-box').hide();
    }
    if (blackmoneyBoxCheck.checked == true){
      $('#blackmoney-box').show();
    } else {
      $('#blackmoney-box').hide();
    }
  }
  
  
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
  });
  
  
  function getTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    var dateTime =  hour+':'+minute
     return dateTime;
  }
  
  function getDate() {
    var now     = new Date();
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    if(month.toString().length == 1) {
      month = '0'+month;
  }
  if(day.toString().length == 1) {
      day = '0'+day;
  }   
    var dateTime =  day+'.'+month+'.'+year
     return dateTime;
  }
  
  setInterval(function(){
    currentTime = getTime();
    currentDate = getDate();
    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("date").innerHTML = currentDate;
  }, 1000);